// ESM
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.41/vue.esm-browser.min.js';

// 定義變數
let apiUrl = 'https://todolist-jsjs.herokuapp.com/todoList';

// 創建 createApp
const app = createApp({
  data(){
    return {
      todoLists: [],
      todoTotal: '',
      todoState: 'all',
      siftTodo: [],
      inputItem: '',
    }
  },
  mounted(){
    this.getTodoLists();
  },

  methods: {
    // 取得 todoList
    getTodoLists(){
      axios.get(`${apiUrl}`)
      .then(response => {
        console.log(response);
        this.todoLists = response.data;
        this.siftState(this.todoState);
      })
      .catch(error => {
        console.dir(error);
      })
    },

    // 篩選 全部 待完成 已完成 all todo done
    siftState(state){
      this.todoState = state;
      switch (this.todoState) {
        case 'all':
          this.siftTodo = this.todoLists;
          break;
        case 'todo':
          this.siftTodo = this.todoLists.filter(n => !n.isFinish)
          break
        case 'done':
          this.siftTodo = this.todoLists.filter(n => n.isFinish)
          break
      }
      this.todoTotal = this.todoLists.filter(n => !n.isFinish).length;
    },

    // 切換待完成和已完成 checked
    changeChecked(key){
      let data = {
        isFinish: !this.siftTodo[key].isFinish,
        todoContent: this.siftTodo[key].todoContent
      }
      let id = this.siftTodo[key].id;

      this.siftTodo[key].isFinish?this.todoTotal++:this.todoTotal--;

      axios.put(`${apiUrl}/${id}`, data)
      .then(response => {
        console.log(response);
        this.siftState(this.todoState);
        if(this.todoState === 'todo'){
          swal("切換成功!", "已移到「已完成」", "success");
        }else if(this.todoState === 'done'){
          swal("切換成功!", "已移到「待完成」", "success");
        }
      })
      .catch(error => {
        console.dir(error);
      })
    },

    // 新增待辦
    addTodo(){
      if(this.inputItem === '') swal("輸入錯誤!", "不可以空白唷", "error");

      const data = {
        isFinish: false,
        todoContent: this.inputItem,
      }

      axios.post(`${apiUrl}`, data)
      .then(response => {
        console.log(response);
        this.getTodoLists();
        this.inputItem = '';
        swal("輸入成功!", "歡迎開啟新的一天", "success");
      })
      .catch(error => {
        console.dir(error);
      })

    },

    // 刪除單筆
    deleteTodo(index){
      let target = this.siftTodo[index]
      axios.delete(`${apiUrl}/${target.id}`)
      .then(response => {
        // console.log(response);
        // console.log("已刪除");
        this.siftTodo.splice(index, 1);
        target.isFinish?this.todoTotal:this.todoTotal --;
        swal("刪除成功!", "已刪除該筆項目", "success");
      })
      .catch(error => {
        console.dir(error);
      })
    },

    // 刪除全部的已完成
    deleteAllDone(){
      const doneArray = this.siftTodo.filter(done => done.isFinish === true);
      console.log(doneArray);

      doneArray.forEach(i=>{
        axios.delete(`${apiUrl}/${i.id}`)
        .then(response => {
          // console.log(response);
          // console.log("全部已刪除");
          let index = this.siftTodo.findIndex(n => n === i)
          this.siftTodo.splice(index, 1);
          swal("刪除成功!", "已刪除全部已完成項目", "success");
        })
        .catch(error => {
          console.dir(error);
        })
      })
    },
  }
})

window.addEventListener('DOMContentLoaded', function(){
  app.mount('#app')
});
