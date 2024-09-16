<template>
  <div class="container">
    <div class="dispatch">
      <div class="title">
        <h1>Ticket Dispatcher</h1>
      </div>
      <div class="form-group mt-4">
        <hr>
        <div class="row">
          <h3 class="mb-4">Ticket Information</h3>
          <div class="col-md-8">
            <input id="ticket_id" type="text" class="input-form me-5" placeholder="Ticket ID: #000000000" v-model="ticket.ticket_id">
            <input id="ticket_link" type="text" class="input-form w-50" placeholder="Ticket Link" v-model="ticket.ticket_link">
          </div>
          <div class="col-md-2">
            <select class="form-select w-100" aria-label="Severity" v-model="ticket.severity">
              <option disabled selected>Severity</option>
              <option value="inf">Informative</option>
              <option value="l">Low</option>
              <option value="m">Medium</option>
              <option value="h">High</option>
              <option value="inic">Incident</option>
            </select>
          </div>
          <div class="col-md-2">
            <select class="form-select w-100" aria-label="Default select example" v-model="ticket.goalkeeper">
              <option disabled selected>Goalkeeper</option>
              <option :value="users[user]" v-for="(key, user) in users" :key="key">{{ user }}</option>
            </select>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="col-md-12">
            <h3 class="mb-4">Title and Description</h3>
            <input type="text" id="title" class="input-form w-100 mb-3" placeholder="Title" v-model="ticket.title">
            <textarea name="description" id="description" class="w-100" v-model="ticket.description">Description...</textarea>
          </div>
        </div>
        <hr>
        <div class="row">
          <h3>Steps to Reproduce</h3>
          <div class="col-md-12 d-flex flex-column justify-content-center gap-1">
            <div v-for="(_, index) in ticket.steps_to_rep" :key="index">
              <input type="text" :placeholder="'Step ' + (index + 1)" class="w-50 input-form mb-2" v-model="ticket.steps_to_rep[index]"><button class="btn btn-primary ms-1" @click="removeStep(index)">Delete</button>
            </div>
            <div class="d-inline-flex justify-content-center">
              <button class="btn btn-primary w-50" @click="addInputBox">+</button>
            </div>
          </div>
        </div>
        <hr>
        <div class="row">
          <div class="header_dbinfo ">
            <div class="form-check form-switch d-flex">
              <input class="form-check-input me-2" type="checkbox" role="switch" id="flexSwitchCheckDefault" @click="add_dinfo = !add_dinfo; ticket.debug_info = ''">
              <label for="flexSwitchCheckDefault">Add Debug Information</label>
            </div>
          </div>
          <div class="col-md-12" v-if="add_dinfo">
            <textarea name="debug_info" id="dinfo" class="w-100" v-model="ticket.debug_info"></textarea>
          </div>
        </div>
        <div class="row">
          <div class="col-md-12 mt-4 mb-5">
            <button class="btn btn-primary w-50" @click="createTicket">Submit</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {getUser, createNewTicket} from "./utils/requests.js";
export default {
  name: 'App',
  data(){
    return {
      inputs: 2,
      add_dinfo: false,
      users: "",
      ticket: {
        ticket_id: "",
        ticket_link: "",
        title: "",
        description: "",
        goalkeeper: "Goalkeeper",
        severity: 'Severity',
        steps_to_rep: [],
        debug_info: ""
      }
    }
  },
  methods: {
    addInputBox(){
      this.ticket.steps_to_rep.push('');
    },
    createTicket(){
      createNewTicket(this.ticket);
    },
    removeStep(index){
      this.ticket.steps_to_rep.splice(index, 1);
    }
  },
  mounted(){
    getUser()
      .then(data =>{
        this.users = data.data;
      });
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#dinfo{
  resize: none;
  height: 20rem;
}
#description {
  resize: none;
  height: 10rem;
}
</style>
