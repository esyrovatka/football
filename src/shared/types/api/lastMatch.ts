export interface ILastMatchProps {
  fixture: {
    data: string;
    id: number;
    periods: {
      first: number;
      second: number;
    };
    referee: string;
    status: {
      elapsed: number;
      long: string;
      short: string;
    };

    timestamp: number;
    timezone: string;
    venue: {
      city: string;
      id: number;
      name: string;
    };
  };
  goals: {
    away: number;
    home: number;
  };
  league: {
    country: string;
    flag: null | string;
    id: number;
    logo: string;
    name: string;
    round: string;
    season: number;
  };

  teams: {
    away: {
      id: number;
      logo: string;
      name: string;
      winner: null;
    };
    home: {
      id: number;
      logo: string;
      name: string;
      winner: null;
    };
  };
}
