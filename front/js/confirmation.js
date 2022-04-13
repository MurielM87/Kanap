//inserer le numero de commande sur la page de confirmation
const orderId = document.getElementById("orderId");
orderId.textContent = getOrderId();

//recuperer "orderID" depuis l'URL
function getOrderId() {
  const url = new URL(location.href);
  return url.searchParams.get("order");
}
