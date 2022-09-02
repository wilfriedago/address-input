export interface FormProps {
  setFormValues: any;
}

export interface FormFieldProps {
  name: string;
  label: string;
  onChange: any;
  options: {}[];
}

export interface DisplaySectionProps {
  country: string;
  state: string;
  city: string;
}

export interface apiData {
  id: number;
  name: string;
  iso2?: string;
}
