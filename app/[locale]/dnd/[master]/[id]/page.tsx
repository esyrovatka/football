import { Box, Button, Card, CardActions, CardContent, List, ListItem, Typography } from "@mui/material";
import { DefaultCardList } from "./config/const";
import { sumByKey } from "@/shared";

const DndMasterGamePage = () => {
  return (
    <Box
      sx={{ maxWidth: 1110, margin: "0 auto", padding: "0 20px" }}
      display="grid"
      gridTemplateColumns={{ xs: "1fr", sm: "repeat(2, 1fr)" }}
      alignItems="center"
      justifyContent="center"
      gap={6}
    >
      {DefaultCardList.map(item => (
        <Card sx={{ minWidth: 275 }} key={`person-card-${item.id}`}>
          <CardContent>
            <Typography sx={{ fontSize: 22 }} color="text.secondary" gutterBottom>
              {item.name}, {item.age}
            </Typography>
            <img src={item.picture} alt={item.name} />
            <Typography variant="h5" component="div">
              {item.description}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              Weight: {sumByKey({ array: item.items, key: "weight" })}/{item.maxWeight}
            </Typography>
            <Typography variant="body2" sx={{ fontSize: 22 }}>
              Gold: {item.gold}
            </Typography>

            <Box>
              <Typography sx={{ fontSize: 22 }}>artefacts:</Typography>

              <List>
                {Object.entries(item.artefact)?.map(([key, value]) => (
                  <ListItem>
                    {key}: {value}
                  </ListItem>
                ))}
              </List>
            </Box>

            <Box>
              <Typography sx={{ fontSize: 22 }}>characteristics:</Typography>

              <List>
                {Object.entries(item.characteristics).map(([key, value]) => (
                  <ListItem>
                    {key}: {value}
                  </ListItem>
                ))}
              </List>
            </Box>
          </CardContent>
          <CardActions>
            <Button size="small">Check army</Button>
          </CardActions>
        </Card>
      ))}
    </Box>
  );
};

export default DndMasterGamePage;
