export interface SelectOption {
  label: string;
  value: string;
}
export interface SelectProps {
  name: string;
  id?: string;
  options: SelectOption[];
  placeholder?: string;
}
