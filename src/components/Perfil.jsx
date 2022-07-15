import React from "react";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

function Perfil() {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({ defaultValues: { userName: "", lastName: "" } });
  const onSubmit = (data) => {
    console.log(data);
  };
  console.log(errors);

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeLastName = (e) => {
    setLastName(e.target.value);
  };

  useEffect(() => {
    reset({
      userName: "",
      lastName: "",
    });
  }, [isSubmitSuccessful, reset]);

  return (
    <div>
      <section>
        <div className="content">
          <h2>
            Olá {name} {lastName} !!!{" "}
          </h2>
        </div>

        {/* FORM */}
        <div className="form-container">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form">
              <label>
                Digite seu Nome:
                <input
                  defaultvalue="userName"
                  {...register("userName", { required: "Faltou o Nome!" })}
                  placeholder="Primeiro Nome"
                  onChange={changeName}
                />
              </label>
              <div className="err">
                {errors.userName?.type === "required" &&
                  "É necessário informar um nome!"}
              </div>
            </div>
            <div className="form">
              <label>
                Seu Sobrenome:
                <input
                  defaultvalue="lastName"
                  {...register("lastName", {
                    required: "Faltou o SobreNome!",
                    minLength: { value: 4, message: "Tamanho min 4" },
                  })}
                  placeholder="Ultimo Nome"
                  onChange={changeLastName}
                />
              </label>
              <div className="err">
                {errors.lastName?.type === "required" &&
                  "É necessário informar um Sobrenome!"}
              </div>
            </div>

            <div className="submit">
              <input type="submit" />
              <button
                type="button"
                onClick={() => {
                  reset({
                    userName: "be",
                    lastName: "Code",
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

export default Perfil;
