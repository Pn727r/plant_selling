import { Grid, Skeleton } from "@mui/material";

const MySkeleton = (index) => {
  return (
    <>
      <Grid
        item
        xs={2}
        sm={4}
        md={4}
        key={index}
        style={{ borderRadius: "10px" }}
      >
        <Skeleton
          animation="wave"
          variant="rectangular"
          width={300}
          height={200}
          style={{ borderRadius: "10px" }}
        />
        <Skeleton
          style={{ marginTop: "10px", borderRadius: "10px" }}
          animation="wave"
          variant="rectangular"
          width={120}
          height={30}
        />
        <Skeleton
          style={{ marginTop: "10px", borderRadius: "10px" }}
          animation="wave"
          variant="rectangular"
          width={300}
          height={50}
        />
        <Skeleton
          style={{ marginTop: "10px", borderRadius: "10px" }}
          animation="wave"
          variant="rectangular"
          width={300}
          height={55}
        />
      </Grid>
    </>
  );
};

export default MySkeleton;
