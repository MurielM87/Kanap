//inserer le numero de commande sur la page de confirmation
const orderId = document.getElementById("orderId");
orderId.textContent = getOrderId();

//recuperer le "orderID" depuis l'URL
function getOrderId() {
  const url = new URL(location.href);
  const orderIdInURL = url.searchParams.get("order");
  return orderIdInURL;
}
