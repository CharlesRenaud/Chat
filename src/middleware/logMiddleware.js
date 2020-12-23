// un middleware se place en entrée du store et intercepte toutes les actions
// avant qu'elles arrivent au store => peut permettre de logguer, d'envoyer une
// requête vers une API...
const logMiddleware = (store) => (next) => (action) => {
  // triple fléchée : une fonction qui retourne une fonction qui retourne une
  // fonction... En fait c'est un peu comme si on avait 3 arguments
  // console.log('On a intercepté une action dans logMiddleware', action);

  // on passe l'action au voisin (le middleware suivant, ou le store si on est le
  // dernier middleware)
  next(action);
};

export default logMiddleware;
