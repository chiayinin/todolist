// ESM
import { createApp } from 'https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.41/vue.esm-browser.min.js';

// 匯入 data (本地端)
import todoData from './data.json' assert {type: 'json'};

// 匯入元件
import todoComponent from './todoComponent.js';

// 定義變數
let localhost = 'http://localhost:3000/todoList';
let Api = {
  posts = '/posts',
  profile = '/profile',
}
let apiUrl = localhost; // 本地端


const app = createApp({
  data(){
    return {
      todoData,
      todoContent: {},
    }
  },

  methods: {
    // 進頁面先確認有無資料？
    // 沒有，不匯入元件。
    // 有，get資料
    searchTodoList(){
      axios.post(todoData)
      .then(response => {
        console.log(response);
        this.
      })
    },

    // 取得 todoList
    getTodoLists(){
      axios.get(todoData)
      .then(response => {
        this.todoData
      })
    }
  }
})

window.addEventListener('DOMContentLoaded', function(){
  app.mount('#app')
});
