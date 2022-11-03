export type Props = {
  item: {
    date_utc: string;
    name: string;
    flight_number: number;
    links: { youtube_id: string };
  };
  onTitleClick: (id: number) => void;
};
