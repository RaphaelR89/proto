import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

function Address() {
  const [address, setAddress] = useState("");
  const [cep, setCep] = useState("");
  const [country, setCountry] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { cep: "", address: "", country: "" } });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  useEffect(() => {
    reset({
      cep: "",
      address: "",
      country: "",
    });
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <section>
        <div className="content">
          <h2>Endereço</h2>
        </div>

        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <label>
                CEP:
                <input
                  defaultValue="cep"
                  {...register("cep", {
                    required: "Coloque um CEP válido!",
                  })}
                  placeholder="CEP"
                ></input>
              </label>
              <div className="err">
                {errors.cep?.type === "required" &&
                  "É necessário colocar um CEP válido!"}
              </div>
            </div>
            <div className="form">
              <label>
                Cidade:
                <input
                  type="text"
                  defaultValue="country"
                  {...register("country", { required: "Faltou a cidade!" })}
                  placeholder="Cidade"
                />
              </label>
              <div className="err">
                {errors.country?.type === "required" &&
                  "É necessário colocar uma cidade válida!"}
              </div>
            </div>
            <div className="form">
              <label>
                Endereço:
                <input
                  type="text"
                  defaultValue="address"
                  {...register("address", { required: "Faltou o endereço!" })}
                  placeholder="Rua,Casa,Avenida, Favela..."
                />
              </label>
              <div className="err">
                {errors.address?.type === "required" &&
                  "É necessário colocar um endereço válido!"}
              </div>
            </div>
            <div className="submit">
              <button type="submit">Enviar</button>
              <button
                type="button"
                onClick={() => {
                  reset({
                    cep: "",
                    address: "",
                    country: "",
                  });
                }}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Address;
