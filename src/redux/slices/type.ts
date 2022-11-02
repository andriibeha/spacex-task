export type LaunchStatus = "loading" | "success" | "error";

export type LaunchType = {
  flight_id: string;
  flight_number: number;
  mission_name: string;
  launch_date_utc: string;
  links: {
    video_link: string;
    webcast: string;
  };
};

export enum SortEnum {
  FLIGHT_NUMBER = "flight_number",
  TITLE = "title",
}

export type SortType = { name: string; sortProperty: string };
