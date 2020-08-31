<template>
  <div>
    <fieldset>
      <legend>Cadastro de Ordens de Serviço</legend>

      <label class="label">Item</label>
      <input class="input" type="text" name="item" v-model="order.item" />
      <label class="label">Descrição</label>
      <input class="input" type="text" name="status" v-model="order.description" />
      <label class="label">Status</label>
      <input class="input" type="text" name="description" v-model="order.status" />
      <div>
        <label class="label">Valor</label>
        <label class="label">Desconto %</label>
        <label class="label">Total</label>
      </div>
      <div>
        <input class="cost" type="text" name="cost" v-model="order.cost" v-on:blur="calculate()" />
        <input
          class="cost"
          type="text"
          name="discount"
          v-model="order.discount"
          v-on:blur="calculate()"
        />
        <input
          id="total"
          class="cost"
          type="text"
          name="subtotal"
          v-model="order.subtotal"
          readonly
        />
      </div>
      <button type="button" v-on:click="addService()">Adicionar Serviço</button>
      <button type="button" v-on:click="home()">Voltar</button>
    </fieldset>
  </div>
</template>

<script>
import Vue from "vue";
import Order from "../services/orders";
export default {
  name: "Order",
  data() {
    return {
      order: {
        item: "",
        description: "",
        status: "",
        user: this.$userId,
        cost: "00.00",
        discount: "0",
        subtotal: "00.00",
      },
    };
  },
  methods: {
    addService() {
      if (
        this.order.item == "" ||
        this.order.description == "" ||
        this.order.status == "" ||
        this.order.cost == ""
      ) {
        window.alert("Preencha todos os campos!");
      } else {
        Order.addOrder(this.order).then((res) => {
          alert("Adicionado com sucesso!");
          this.order = {};
          this.$router.replace({ name: "home" });
        });
      }
    },
    calculate() {
      if (this.order.discount != "" && this.order.cost != "") {
        this.order.subtotal =
          parseInt(this.order.cost) -
          parseInt(this.order.cost) * (parseInt(this.order.discount) / 100);
      } else if (
        (this.order.discount == "" || this.order.discount == 0) &&
        this.order.cost != ""
      ) {
        this.order.subtotal = this.order.cost;
      }
    },
    home() {
      this.$router.replace({ name: "home" });
    },
  },
};
</script>
<style>
fieldset {
  display: flex;
  justify-content: center;
  align-self: center;
  align-content: center;
  background-color: #ffffff;
  border: 1px solid #bfe3eb;
  border-radius: 6.8px;
  margin: 4rem 4rem;
}
legend {
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 2rem;
  color: #257587;
  margin-left: 17rem;
}
select {
  padding: 0.5rem 1rem;
  width: 39rem;
  font-size: 20px;
  background: rgba(239, 246, 249, 0.25);
  margin-left: 7rem;
  margin-bottom: 1rem;
  border-radius: 6.8px;
  border: 1px solid #59b1c5;
}
button {
  margin-left: 20rem;
}
.label {
  margin-right: 5rem;
  margin-left: 7rem;
}
.input {
  padding: 0.5rem 1rem;
  width: 37rem;
  margin-left: 7rem;
  margin-bottom: 1rem;
}
.cost {
  padding: 0.5rem 1rem;
  font-size: 20px;
  width: 6.2rem;
  margin-bottom: 1rem;
  margin-left: 7rem;
  border-radius: 6.8px;
  border: 1px solid #59b1c5;
}
#total {
  background-color: #cacccc;
}
</style>