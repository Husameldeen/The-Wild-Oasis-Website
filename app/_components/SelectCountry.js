import { getCountries } from "@/app/_lib/data-service";

// Let's imagine your colleague already built this component 😃

async function SelectCountry({ defaultCountry, name, id, className }) {
  const countries = await getCountries();
  const country = countries.objects.map((country) => country.names.common);
  // console.log(country);
  console.log(defaultCountry);
  const flag =
    countries.objects.find((country) => country.names.common === defaultCountry)
      ?.flag.url_png ?? "";
  console.log(flag);

  return (
    <select
      name={name}
      id={id}
      // Here we use a trick to encode BOTH the country name and the flag into the value. Then we split them up again later in the server action
      defaultValue={`${defaultCountry}%${flag}`}
      className={className}
    >
      <option value="">Select country...</option>
      {countries.objects.map((c) => (
        <option
          key={c.names.common}
          value={`${c.names.common}%${c.flag.url_png}`}
        >
          {c.names.common}
        </option>
      ))}
    </select>
  );
}

export default SelectCountry;
