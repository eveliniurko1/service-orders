<template>
  <div id="home">
    <h1>Bem-Vinda(o) a Área de Clientes</h1>
    <table>
      <thead>
        <tr>
          <th>Descrição</th>
          <th>Item</th>
          <th>Status</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        <td>
          <ul v-for="order in orders" :key="order._id">{{ order.description }}</ul>
        </td>
        <td>
          <ul v-for="order in orders" :key="order._id">{{ order.item }}</ul>
        </td>
        <td>
          <ul v-for="order in orders" :key="order._id">{{ order.status }}</ul>
        </td>
        <td>
          <ul v-for="order in orders" :key="order._id">{{ order.subtotal }}</ul>
        </td>
        <td>
          <ul v-for="order in orders" :key="order._id">
            <img src="../static/delete.svg" alt="Deletar" v-on:click="del(order)" />
          </ul>
        </td>
        <td>
          <ul v-for="order in orders" :key="order.item">
            <img src="../static/edit.svg" alt="Editar" v-on:click="update(order)" />
          </ul>
        </td>
      </tbody>
    </table>
    <button id="btn" type="button" v-on:click="addOrder()">Nova Ordem</button>
    <button id="btn" type="button" v-on:click="logOut()">Sair</button>
  </div>
</template>

<script>
import Orders from "../services/orders";

export default {
  name: "Home",
  data() {
    return {
      orders: [],
    };
  },
  mounted() {
    Orders.list(this.$userId).then((res) => {
      this.orders = res.data.orders;
    });
  },
  methods: {
    addOrder() {
      this.$router.replace({ name: "orders" });
    },
    update(order) {
      if (order.status != "Aberta" && order.status != "aberta") {
        //to do: usar v-select para trazer dados dinamicamente da api
        alert("Não é possível editar ordens que não estejam abertas!");
      } else {
        order.item = "Alterando ordem";
        Orders.update(order).then((res) => {
          Orders.list(this.$userId).then((res) => {
            this.orders = res.data.orders;
          });
        });
      }
    },
    del(order) {
      if (confirm("Realmente deseja excluir?")) {
        Orders.del(order).then((res) => {
          Orders.list(this.$userId).then((res) => {
            this.orders = res.data.orders;
          });
        });
      }
    },
    logOut() {
      this.$router.replace("login");
    },
  },
};
</script>
<style>
#home {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
img {
  width: 19px;
  height: 20px;
}
body {
  font-family: Helvetica Neue, Arial, sans-serif;
  font-size: 16px;
  color: #444;
}
table {
  border: 1px solid #257587;
  border-radius: 3px;
  background-color: #fff;
}
th {
  background-color: #518692;
  color: #fff;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
td {
  background-color: #f9f9f9;
}
th,
td {
  min-width: 13rem;
}
.btn {
  margin-right: 17rem;
}
</style>