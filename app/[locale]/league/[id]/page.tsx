import { ILastMatchProps, Typography } from "@/shared";
import { createBem } from "@mukhindev/create-bem";
import styles from "./page.module.scss";
import axios from "axios";

async function getData(id: string) {
  const { data } = await axios.get("https://v3.football.api-sports.io/fixtures", {
    headers: {
      "x-rapidapi-key": "3520adf266d4101571ec5275b448e5c2",
      "x-rapidapi-host": "v3.football.api-sports.io",
    },
    params: {
      league: id, // ID лиги для Лиги чемпионов
      season: 2024, // Текущий сезон
      last: 5, // Количество последних матчей, которые нужно получить
    },
  });
  // const data: { response: ILastMatchProps[] } = {
  //   response: [
  //     {
  //       fixture: {
  //         data: "2024-08-06T18:00:00+00:00",
  //         id: 1273687,
  //         periods: {
  //           first: 1,
  //           second: 2,
  //         },
  //         referee: "Donatas Rumsas, Lithuania",
  //         status: {
  //           elapsed: 90,
  //           long: "Match Finished",
  //           short: "FT",
  //         },

  //         timestamp: 1722967200,
  //         timezone: "UTC",
  //         venue: {
  //           city: "Lublin",
  //           id: 11992,
  //           name: "Arena Lublin",
  //         },
  //       },
  //       goals: {
  //         away: 1,
  //         home: 1,
  //       },
  //       league: {
  //         country: "World",
  //         flag: null,
  //         id: 2,
  //         logo: "https://media.api-sports.io/football/leagues/2.png",
  //         name: "UEFA Champions League",
  //         round: "3rd Qualifying Round",
  //         season: 2024,
  //       },
  //       teams: {
  //         away: {
  //           id: 257,
  //           logo: "https://media.api-sports.io/football/teams/257.png",
  //           name: "Rangers",
  //           winner: null,
  //         },
  //         home: {
  //           id: 572,
  //           logo: "https://media.api-sports.io/football/teams/572.png",
  //           name: "Dynamo Kyiv",
  //           winner: null,
  //         },
  //       },
  //     },
  //     {
  //       fixture: {
  //         data: "2024-08-06T18:00:00+00:00",
  //         id: 1273687,
  //         periods: {
  //           first: 1,
  //           second: 2,
  //         },
  //         referee: "Donatas Rumsas, Lithuania",
  //         status: {
  //           elapsed: 90,
  //           long: "Match Finished",
  //           short: "FT",
  //         },

  //         timestamp: 1722967200,
  //         timezone: "UTC",
  //         venue: {
  //           city: "Lublin",
  //           id: 11992,
  //           name: "Arena Lublin",
  //         },
  //       },
  //       goals: {
  //         away: 1,
  //         home: 1,
  //       },
  //       league: {
  //         country: "World",
  //         flag: null,
  //         id: 2,
  //         logo: "https://media.api-sports.io/football/leagues/2.png",
  //         name: "UEFA Champions League",
  //         round: "3rd Qualifying Round",
  //         season: 2024,
  //       },
  //       teams: {
  //         away: {
  //           id: 257,
  //           logo: "https://media.api-sports.io/football/teams/257.png",
  //           name: "Rangers",
  //           winner: null,
  //         },
  //         home: {
  //           id: 572,
  //           logo: "https://media.api-sports.io/football/teams/572.png",
  //           name: "Dynamo Kyiv",
  //           winner: null,
  //         },
  //       },
  //     },
  //   ],
  // };

  if (!data.response) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return data.response;
}

export default async function LeagueChampionsPage({ params }) {
  const data = await getData(params.id);
  const bem = createBem("home", styles);

  return (
    <main className={bem()}>
      {data.map(match => (
        <div key={match.fixture.id} className={bem("match")}>
          <div className={bem("item")}>
            <img src={match.teams.home.logo} alt="" width={50} height={50} />
            <Typography>{match.goals.home}</Typography>
          </div>
          vs
          <div className={bem("item")}>
            <img src={match.teams.away.logo} alt="" width={50} height={50} />
            <Typography>{match.goals.away}</Typography>
          </div>
        </div>
      ))}
    </main>
  );
}
