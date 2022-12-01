
export function checkPassword(password, repeatPass) {
  let validPass = true;
  const pass = password.value;
  const passAgain = repeatPass.value;

  console.log(pass)
//   if (pass !== passAgain) {
//     validPass = false;
//     console.log("As senhas não coincidem");
//   }

//   if (pass.length < 8) {
//     validPass = false;
//     console.log("Senha precisa ter 8 caracteres!");
//     console.log(pass);
//   }
  return validPass;
}

export function validUserName(field) {
  const user = field.value;
  const formatValueName = /[A-Z][a-z]* [A-Z][a-z]*/
  let validPass = true;

  console.log(user)

//   if (user.length < 3 || user.length > 20) {
//     console.log("Nome e Sobrenome inválidos!");
//     validPass = false;
//   }

//   if (!user.match(formatValueName)) {
//     console.log("nome de usuário inválido!");
//     validPass = true;
//   }

  return validPass;
}

export function validEmail(field) {
  let validPass = true;
  const email = field.value;
  const formatEmail = /^w+([\.-]?w+)*@\w([\.-]?\w+)*(\.\w{2,3})+$/;

  if (!email.toLowerCase().match(formatEmail)) {
    console.log("Email inválido!");
    validPass = true;
  }

  return validPass;
}
