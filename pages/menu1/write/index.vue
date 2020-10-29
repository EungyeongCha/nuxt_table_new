<template>
    <div>
      <h2>사용자 등록</h2>
      <p class="pb-2">사용자 등록을 위해 아래 목록을 작성해 주세요</p>
        <b-form  @submit.stop.prevent="onSubmit()" class="form">
          <label for="feedback-userName">이름:</label>
          <b-input v-model="name" :state="validationName" id="feedback-userName"></b-input>

          <b-form-invalid-feedback :state="validationName">
            10자 이하로 입력해 주세요
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationName">
          </b-form-valid-feedback>

          <label for="feedback-userId">User ID:</label>
          <b-input v-model="userId" :state="validationId" id="feedback-userId"></b-input>

          <b-form-invalid-feedback :state="validationId">
            15자 이하로 입력해 주세요
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationId">
          </b-form-valid-feedback>

          <label for="feedback-userEmail">Email:</label>
          <b-input v-model="email" :state="validationEmail" id="feedback-userEmail"></b-input>

          <b-form-invalid-feedback :state="validationEmail">
            20자 이하로 입력해 주세요
          </b-form-invalid-feedback>
          <b-form-valid-feedback :state="validationEmail">
          </b-form-valid-feedback>
            
            <b-button type="submit" class="mt-5 float-right">등록</b-button>
            <b-button type="reset" variant="primary" class="mt-5 float-right">취소</b-button>
      </b-form>
  </div>

</template>

<script>
  export default {
    data() {
      return {
        name: '',
        userId: '',
        email: ''
      }
    },
    computed: {
      validationName() {
        return this.name.length > 2 && this.name.length < 10
      },
      validationId() {
        return this.userId.length > 6 && this.userId.length < 15
      },
      validationEmail() {
        return this.email.length > 3 && this.email.length < 25
      },
      methods: {
        onSubmit(e) {
          e.preventDefault()
          console.log(1)
        }
      }
    }
  }
</script>

<style>
 body {
   color: #fff;
 }
 

 /* .invalid-feedback {
   margin-bottom: 30px;
 } */
 

</style>