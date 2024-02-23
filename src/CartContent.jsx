import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import {colorDict} from "./Global";


const flowerContent = (name, care) => {
    return (
      <>
        <CardContent sx={{ flex: "1 0 auto" }}>
          <Typography component="div" variant="h6">
            Name : {name}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" component="div">
            Care : {care}
          </Typography>
        </CardContent>
      </>
    );
  };
  
  const potsContent = (category, color, type) => {
    return (
      <CardContent>
        <Typography component="div" variant="h6">
          Category : {category}
        </Typography>
        <Typography my={1} variant="subtitle1">
          <div
            style={{
              display: "flex",
              "align-items": "center",
              "justify-content": "flex-start",
            }}
          >
            Color :{" "}
            {color.map((clr) => {
              return (
                <>
                  <div
                    style={{
                      borderRadius: "50%",
                      marginLeft: "10px",
                      backgroundColor: colorDict[clr],
                      width: "20px",
                      height: "20px",
                    }}
                  ></div>
                </>
              );
            })}
          </div>
        </Typography>
        <Typography variant="subtitle1">Type : {type}</Typography>
      </CardContent>
    );
  };

export {flowerContent , potsContent}