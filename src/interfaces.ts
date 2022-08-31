export interface FormInputProps {
  name: string;
  label: string;
  datalistID: string;
  datalist: {}[];
  onBlur: any;
}

export interface DisplaySectionProps {
  country: string;
  state: string;
  city: string;
}

export interface DatalistProps {
  id: string;
  list: {}[];
}

export interface apiData {
  id: number;
  name: string;
  iso2?: string;
}
