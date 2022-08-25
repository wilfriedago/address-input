export interface FormInputProps {
  name: string;
  label: string;
  datalistID: string;
  datalist: {}[];
  onBlur: any;
}

export interface apiData {
  id: number;
  name: string;
  iso2?: string;
}
