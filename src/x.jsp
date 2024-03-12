import java.io.IOException;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.SQLException;
import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.servlet.http.HttpSession;
import java.util.logging.Level;
import java.util.logging.Logger;

@WebServlet("/UpdateItemServlet")
public class UpdateItemServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String plantName = request.getParameter("plant_name");
        int newQty = Integer.parseInt(request.getParameter("qty"));
          HttpSession session = request.getSession();
        String email = (String) session.getAttribute("email");
        String url = "jdbc:mysql://localhost:4306/web_plant";
        String username = "root";
        String password = "";
        
        try {
            Class.forName("com.mysql.cj.jdbc.Driver");
            Connection connection = DriverManager.getConnection(url, username, password);

            String updateQuery = "UPDATE flower_plant SET qty = ?  WHERE plant_name = ? AND email = ?";
            PreparedStatement statement = connection.prepareStatement(updateQuery);
            statement.setInt(1, newQty);
            statement.setString(2, plantName);
            statement.setString(3 , email);
            int rowsUpdated = statement.executeUpdate(); // na

            if (rowsUpdated > 0) {
                  request.setAttribute("message", "Item updated successfully");
                // Redirect back to the shopping cart page after updating
                response.sendRedirect("cart.jsp");
            } else {
                response.getWriter().println("No rows updated.");
            }
        } catch (SQLException e) {
            e.printStackTrace();
            // Handle database errors
            response.getWriter().println("Database connection error: " + e.getMessage());
        } catch (NumberFormatException e) {
            e.printStackTrace();
            // Handle invalid quantity input
            response.getWriter().println("Invalid quantity input: " + e.getMessage());
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(UpdateItemServlet.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}




..............................................

<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<%@ page import="java.sql.*" %>
<%@ page session="true" %>
<%@ page import="java.io.IOException" %>
<%@ page import="jakarta.servlet.http.HttpSession" %>
<%@ page import="java.sql.Connection" %>
<%@ page import="java.sql.DriverManager" %>
<%@ page import="java.sql.PreparedStatement" %>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shopping Cart</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <style>
        body {
            background-color: #f8f9fa;
        }

        .heading {
            text-align: center;
            color: #28a745;
            margin-top: 50px;
        }

        .container {
            justify-content: center;
            align-items: center;
            height: 280px;
        }
        
        .flexing {
            align-content: center ;
            justify-content:  center ;
            display: flex ; 
            margin-left: 10px ;
            margin-right : 10px ; 
        }
    </style>
</head>
<body>
     <h2 class="mb-4 heading">My Cart</h2>
<%
    String email = (String) session.getAttribute("email");
    String url = "jdbc:mysql://localhost:4306/web_plant";
    String username = "root";
    String password = "";

    try {
        Class.forName("com.mysql.cj.jdbc.Driver");
        Connection connection = DriverManager.getConnection(url, username, password);
        
        // Fetch data from flower_plant table
        PreparedStatement flowerPlantPs = connection.prepareStatement("SELECT * FROM flower_plant WHERE email = ?");
        flowerPlantPs.setString(1, email);
        ResultSet flowerPlantResultSet = flowerPlantPs.executeQuery();
        
        // Fetch data from cart_soil table
        PreparedStatement cartSoilPs = connection.prepareStatement("SELECT * FROM cart_soil WHERE email = ?");
        cartSoilPs.setString(1, email);
        ResultSet cartSoilResultSet = cartSoilPs.executeQuery();
        
        // Fetch data from cart_pot table
        PreparedStatement cartPotPs = connection.prepareStatement("SELECT * FROM cart_pot WHERE email = ?");
        cartPotPs.setString(1, email);
        ResultSet cartPotResultSet = cartPotPs.executeQuery();
        
        // Fetch data from cart_equipments table
        PreparedStatement cartEquipmentsPs = connection.prepareStatement("SELECT * FROM cart_equipments WHERE email = ?");
        cartEquipmentsPs.setString(1, email);
        ResultSet cartEquipmentsResultSet = cartEquipmentsPs.executeQuery();
%>


<!-- HTML code for displaying flower_plant data -->
<% while (flowerPlantResultSet.next()) { %>
    <div class="container mt-4">
          <div class="container mt-4">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <%-- Display image here --%>
                        <% String imageName = flowerPlantResultSet.getString("image"); %>
                        <img src="images/<%= imageName %>" width="200" height="200" class="card-img" alt="Product Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <%-- Display plant details here --%>
                            <% String plantName = flowerPlantResultSet.getString("plant_name"); %>
                            <h5 class="card-title"><%= plantName %></h5>
                            <% String plantCare = flowerPlantResultSet.getString("plant_care"); %>
                            <p class="card-text"><%= plantCare %></p>
                            <%-- Display quantity here --%>
                            <% String qty = flowerPlantResultSet.getString("qty"); %>
                            <p class="card-text">QTY: <%= qty %></p>
                            <div class="flexing mx-10"> 
                                <div class="flexing mx-10">
                                    <%-- Form for removing item --%>
                                    <form action="DeleteItemServlet" method="post">
                                        <input type="hidden" name="plant_name" value="<%= plantName %>">
                                        <button class="btn btn-danger">Remove</button>
                                    </form>
                                </div>
                                <div>
                                    <%-- Form for updating quantity --%>
                                    <form action="UpdateItemServlet" method="post">
                                        <input type="hidden" name="plant_name" value="<%= plantName %>">
                                        <input type="number" name="qty" value="<%= qty %>" min="1" max="10"> 
                                        <button type="submit" class="btn btn-primary">Update</button> 
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<% } %>


<!-- HTML code for displaying cart_soil data -->
<% while (cartSoilResultSet.next()) { %>
    <div class="container mt-4">
        
        <div class="container mt-4">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <%-- Display image here --%>
                        <% String imageName = cartSoilResultSet.getString("file_name"); %>
                        <img src="images/<%= imageName %>" width="200" height="200" class="card-img" alt="Product Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <%-- Display soil details here --%>
                            <% String soilName = cartSoilResultSet.getString("soil_name"); %>
                            <h5 class="card-title"><%= soilName %></h5>
                            <% String description = cartSoilResultSet.getString("description"); %>
                            <p class="card-text"><%= description %></p>
                            <%-- Display quantity here --%>
                            <% String qty = cartSoilResultSet.getString("qty"); %>
                            <p class="card-text">QTY: <%= qty %></p>
                            <div class="flexing mx-10"> 
                                <div class="flexing mx-10">
                                    <%-- Form for removing item --%>
                                    <form action="DeleteItemServlet" method="post">
                                        <input type="hidden" name="soil_name" value="<%= soilName %>">
                                        <button class="btn btn-danger">Remove</button>
                                    </form>
                                </div>
                                <div>
                                    <%-- Form for updating quantity --%>
                                    <form action="UpdateItemServlet" method="post">
                                        <input type="hidden" name="soil_name" value="<%= soilName %>">
                                        <input type="number" name="qty" value="<%= qty %>" min="1" max="10"> 
                                        <button type="submit" class="btn btn-primary">Update</button> 
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<% } %>


<!-- HTML code for displaying cart_pot data -->
<% while (cartPotResultSet.next()) { %>
    <div class="container mt-4">
     
        <div class="container mt-4">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <%-- Display image here --%>
                        <% String imageName = cartPotResultSet.getString("image"); %>
                        <img src="images/<%= imageName %>" width="200" height="200" class="card-img" alt="Product Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <%-- Display pot details here --%>
                            <% String potCategory = cartPotResultSet.getString("pot_category"); %>
                            <h5 class="card-title"><%= potCategory %></h5>
                            <% String potType = cartPotResultSet.getString("pot_type"); %>
                            <p class="card-text"><%= potType %></p>
                            <%-- Display quantity here --%>
                            <% String qty = cartPotResultSet.getString("qty"); %>
                            <p class="card-text">QTY: <%= qty %></p>
                            <div class="flexing mx-10"> 
                                <div class="flexing mx-10">
                                    <%-- Form for removing item --%>
                                    <form action="DeleteItemServlet" method="post">
                                        <input type="hidden" name="pot_category" value="<%= potCategory %>">
                                        <button class="btn btn-danger">Remove</button>
                                    </form>
                                </div>
                                <div>
                                    <%-- Form for updating quantity --%>
                                    <form action="UpdateItemServlet" method="post">
                                        <input type="hidden" name="pot_category" value="<%= potCategory %>">
                                        <input type="number" name="qty" value="<%= qty %>" min="1" max="10"> 
                                        <button type="submit" class="btn btn-primary">Update</button> 
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<% } %>

<!-- HTML code for displaying cart_equipments data -->
<% while (cartEquipmentsResultSet.next()) { %>
    <div class="container mt-4">
       
        <div class="container mt-4">
            <div class="card mb-3">
                <div class="row no-gutters">
                    <div class="col-md-4">
                        <%-- Display image here --%>
                        <% String imageName = cartEquipmentsResultSet.getString("file_name"); %>
                        <img src="images/<%= imageName %>" width="200" height="200" class="card-img" alt="Product Image">
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <%-- Display equipment details here --%>
                            <% String equipmentName = cartEquipmentsResultSet.getString("equipment_name"); %>
                            <h5 class="card-title"><%= equipmentName %></h5>
                            <% String description = cartEquipmentsResultSet.getString("description"); %>
                            <p class="card-text"><%= description %></p>
                            <%-- Display quantity here --%>
                            <% String qty = cartEquipmentsResultSet.getString("qty"); %>
                            <p class="card-text">QTY: <%= qty %></p>
                            <div class="flexing mx-10"> 
                                <div class="flexing mx-10">
                                    <%-- Form for removing item --%>
                                    <form action="DeleteItemServlet" method="post">
                                        <input type="hidden" name="equipment_name" value="<%= equipmentName %>">
                                        <button class="btn btn-danger">Remove</button>
                                    </form>
                                </div>
                                <div>
                                    <%-- Form for updating quantity --%>
                                    <form action="UpdateItemServlet" method="post">
                                        <input type="hidden" name="equipment_name" value="<%= equipmentName %>">
                                        <input type="number" name="qty" value="<%= qty %>" min="1" max="10"> 
                                        <button type="submit" class="btn btn-primary">Update</button> 
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
<% } %>


<%
    } catch (Exception e) {
        e.printStackTrace();
    }
%>

<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.0.8/dist/umd/popper.min.js"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
</body>
</html>
