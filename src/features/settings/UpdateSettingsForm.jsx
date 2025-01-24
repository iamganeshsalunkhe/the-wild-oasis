import styled from 'styled-components';
import Form from '../../ui/Form';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import { useSettings } from './useSettings';
import { useUpdateSetting } from "./useUpdateSetting";
const FormRow = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 24rem 1fr 1.2fr;
  gap: 2.4rem;

  padding: 1.2rem 0;

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    padding-bottom: 0;
  }

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }

  &:has(button) {
    display: flex;
    justify-content: flex-end;
    gap: 1.2rem;
  }
`;
const Label = styled.label`
  font-weight: 500;
`;

function UpdateSettingsForm() {
  const {isLoading,
    settings:{
    minBookingLength,
    maxBookingLength,
    maxGuestsPerBooking,
    breakfastPrice } ={}
  } = useSettings();
  const {isUpdating, updateSetting} = useUpdateSetting();

  if (isLoading) return <Spinner/  >

  function handleUpdate(e,field){
    const {value} = e.target;

    if (!value) return ;
    updateSetting({[field]:value})
  }

  return (
    <Form>
      <FormRow>
        <Label>Minimum nights/booking</Label>
        <Input
          type="number"
          id="min-nights"
          disabled={isUpdating}
          defaultValue={minBookingLength}
          onBlur={(e) => handleUpdate(e, "minBookingLength")}
        />
      </FormRow>
      <FormRow>
        <Label>Maximum nights/booking</Label>
        <Input
          type="number"
          id="max-nights"
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          onBlur={(e)=>handleUpdate(e,"maxBookingLength")}
        />
      </FormRow>
      <FormRow>
        <Label>Max Guest/booking</Label>
        <Input
          type="number"
          id="max-guests"
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          onBlur={(e)=>handleUpdate(e,"maxGuestsPerBooking")}
        />
      </FormRow>
      <FormRow>
        <Label>Breakfast Price </Label>
        <Input
          type="number"
          id="breakfastPrice"
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          onBlur={(e)=>handleUpdate(e,"breakfastPrice")}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
