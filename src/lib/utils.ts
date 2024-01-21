import { format, parse } from "date-fns";
import { enUS } from "date-fns/locale";

export const getCurrentPosition = (): Promise<
  GeolocationPosition | undefined
> => {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => resolve(position),
      (error) => reject(error)
    );
  });
};

export function formatDate(inputDate: string): string {
  const dateObject = parse(inputDate, "yyyy-MM-dd", new Date());

  const formattedDate = format(dateObject, "LLL d, EEE", { locale: enUS });

  return formattedDate;
}
