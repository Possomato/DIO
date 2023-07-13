async function fetchProfileData(){
  const url = 'https://raw.githubusercontent.com/Possomato/DIO/main/javascript/Bootcamp-FormacaoJavaScriptDeveloper/modulo04/portifolio/data/profile.json'
  const fetching = await fetch(url)
  return await fetching.json()
}