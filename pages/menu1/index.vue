<template>
    <div class="clearfix">
        <h2>사용자 검색</h2>
        <p>사용자 정보를 검색할 수 있습니다</p>
        <form action="" @submit="searchUser" class="pb-4">
          <input type="text" name="" id="" placeholder="search" class="form-input">
          <input type="submit" value="검색" @submit="searchUser" class="form-btn">
        </form>
       <b-table-simple
                    bordered
                    small caption-top
                    responsive
                    class="w-100 p-3 text-center"
                    id="my-table"
                    :users="users"
                    :per-page="perPage"
                    :current-page="currentPage"
                    >
        <b-thead head-variant="dark">
          <b-tr variant="dark">
            <b-th class="text-center custom_col_w_5">No</b-th>
            <b-th class="custom_col_w_90">Name</b-th>
            <b-th class="custom_col_w_90">User ID</b-th>
            <b-th class="custom_col_w_90">Email</b-th>
            <!-- <b-th class="text-center custom_col_w_90">Action</b-th> -->
          </b-tr>
        </b-thead>
        <b-tbody v-for ="user in users" :key="user.id" variant="dark">
          <b-tr class="table-body" >
            <b-td class="p-2 align-center">{{user.id}}</b-td>
            <b-td>{{user.name}}</b-td>
            <b-td>{{user.username}}</b-td>
            <b-td>{{user.email}}</b-td>
          </b-tr>
        </b-tbody>
    </b-table-simple>
    <b-button class="float-right">
      
    <nuxt-link to='menu1/write'>추가</nuxt-link>
    </b-button>
    <b-pagination
      class="d-flex justify-content-center"
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      aria-controls="my-table"
    ></b-pagination>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      users: [],
    }
  },

computed: {
  rows() {
        return this.users.length
      }
},

 async created() {
  await axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => 
    this.users = res.data
  )
  .catch(err => console.log(err))
 },

 methods: {
   async searchUser(e) {
     e.preventDefault()
     console.log(e)
     const searchValue = e.target[0].value
     console.log(searchValue)
     if(searchValue ==='') {
       this.$bvModal.msgBoxOk('검색어를 입력해주세요', {
          title: '알림',
          size: 'sm',
          buttonSize: 'sm',
          okVariant: 'dark',
          headerClass: 'p-2 border-bottom-0',
          footerClass: 'p-2 border-top-0',
          centered: true,
        })
     }else {
      await axios.get(`https://jsonplaceholder.typicode.com/users/${searchValue}`)
      .then(res => 
       this.users = res
       )
      this.searchValue = '';
     }
      }
   },

    async handleSubmit() {
        // Exit when the form isn't valid
        if (!this.checkFormValidity()) {
          return
        }
        const res = await axios.post('https://jsonplaceholder.typicode.com/users', 
        {
        name: submittedNames[0]  
        })
        .then(res => res.data)
        // Push the name to submitted names
        this.users.push(name)
        this.submittedNames.push(this.name)
        this.users.name.push(this.name)
        // Hide the modal manually
        this.$nextTick(() => {
          this.$bvModal.hide('modal-prevent-closing')
        })
      },
      createUser() {
        this.$router.push('/write')
      }
    }
    
</script>

<style>
body {
  background-color: #2a3138;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.input-box {
  width: 40%;
}

.form-input {
  margin-top: 12px;
  margin-left: 13px;
  margin-right: 10px;
  width: 93%;
  padding: 6px;
  border: 1px solid #5e6267;
  border-radius: 5px;
}

.form-input:focus {
 outline: none; 
}

.form-btn {
  background-color: #21ba8e;
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 10px;
  border-radius: 3px;
}

button.page-link {
  background-color: #2a3138;
  color: #fff;
  border: none;
}

button.page-link:hover {
  background-color:  #2a3138;
  color: #21ba8e;
}

li.page-item.disabled {
  background-color: #212529;
  color: #fff;
  border: none;
}

th {
  text-align: left;
}

tbody {
  text-align: left;
}

.table .thead-dark th {
    color: #fff;
    background-color: #232a30;
    border-color: #303840;
}

.align-center {
  text-align: center;
}

.page-item.active .page-link {
    z-index: 3;
    color: #fff;
    background-color: #343a40;
    border-color: #343a40;
}

.table-body {
  color: #fff;
}

.table th, .table td {
    padding: 0.75rem;
    vertical-align: top;
    border-top: 2px solid #7f8286;
}

/* 보더 */
.table-bordered th, .table-bordered td {
    border: 2px solid #303840;
}

input {
  background-color: #373d44;
  color: #fff;
}

h2 {
  padding-top: 20px;
  font-size: 1.5rem;
  
}

h2, p {
  color: #fff;
  padding-left: 10px;
}

p {
  color: #5e6267;
}

td {
  border-color: #343a40;
}

.btn-secondary {
    color: #fff;
    background-color:#21ba8e;
    border-color: #21ba8e;
}

.modal-header {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: 1rem 1rem;
    border-bottom: 1px solid #dee2e6;
    border-top-left-radius: calc(0.3rem - 1px);
    border-top-right-radius: calc(0.3rem - 1px);
    background-color: #2a3138;
}

.modal-header h5 {
  color: #35ba91;
}

.modal-body {
    position: relative;
    flex: 1 1 auto;
    padding: 1rem;
    background-color: #2a3138;
  color: #ccc;
}

.modal-footer {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: flex-end;
    padding: 0.75rem;
    border-top: 1px solid #dee2e6;
    border-bottom-right-radius: calc(0.3rem - 1px);
    border-bottom-left-radius: calc(0.3rem - 1px);
    background-color: #2a3138;

}

.btn-dark {
    color: #fff;
    background-color: #35ba91;
    border-color: #35ba91;
}



</style>
