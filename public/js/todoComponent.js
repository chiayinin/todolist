export default {
  data() {
    return {}
  },
  template: `<div class="card card_list">
  <ul class="tab">
    <li class="active">全部</li>
    <li>待完成</li>
    <li>已完成</li>
  </ul>
  <div class="cart_content">
    <ul class="list">
      <li>
        <label class="checkbox" for="">
          <input type="checkbox" />
          <span>把冰箱發霉的檸檬拿去丟</span>
        </label>
        <a href="#" class="delete"></a>
      </li>
      <li>
        <label class="checkbox" for="">
          <input type="checkbox" />
          <span>把冰箱發霉的檸檬拿去丟</span>
        </label>
        <a href="#" class="delete"></a>
      </li>
      <li>
        <label class="checkbox" for="">
          <input type="checkbox" />
          <span>把冰箱發霉的檸檬拿去丟</span>
        </label>
        <a href="#" class="delete"></a>
      </li>
      <li>
        <label class="checkbox" for="">
          <input type="checkbox" />
          <span>把冰箱發霉的檸檬拿去丟</span>
        </label>
        <a href="#" class="delete"></a>
      </li>
    </ul>
    <div class="list_footer">
      <p>5 個待完成項目</p>
      <a href="#">清除已完成項目</a>
    </div>
  </div>
</div>`
}
