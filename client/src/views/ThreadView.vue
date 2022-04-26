<template>

  <div class="body">
    <div style="height:20px">
    </div>
    <div class="row">
      <div class="col-1">
      </div>

      <div class="col-10">
        <div class="post">
          <div class="test_layout row">
            <div class="test_layout col-9 title">
              <h1>
                Thread Title
              </h1>
            </div>
            <div class="test_layout col-2">
              Other stuff, like username and date
            </div>
            <div class=col-1>
              pad
            </div>
          </div>
          <div class="test_layout row">
            <div class="test_layout col-9">
              Content:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
        </div>
        <div class="comment_area">
          <p style="margin-bottom:5px">Comment:</p>
          <textarea style="width:100%; height:80px">

          </textarea>
        </div>
        <!-- Comment Area -->
        <div class="post">
          <div class="test_layout row">
            <div class="test_layout col-11 title">
              <h4>
                Username
              </h4>
            </div>
            <div class=col-1>
              pad
            </div>
          </div>
          <div class="test_layout row">
            <div class="test_layout col-9">
              Content:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div style="height:10px"></div>
          </div>

          <div style="height:10px"></div>

        <div class="post">
          <div class="test_layout row">
            <div class="test_layout col-11 title">
              <h4>
                Username
              </h4>
            </div>
            <div class=col-1>
              pad
            </div>
          </div>
          <div class="test_layout row">
            <div class="test_layout col-9">
              Content:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div style="height:10px"></div>
          <!-- Reply -->
          <div class="row">
            <div class="col-1">
            </div>
            <div class="col-11">
              <div class="post">
          <div class="row">
            <div class="col-11 title">
              <h4>
                Username
              </h4>
            </div>
            <div class=col-1>
              pad
            </div>
          </div>
          <div class=" row">
            <div class="col-9">
              Content:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
            </div>
            </div>
          </div>

        </div>

        <div style="height:10px"></div>

        <div class="post">
          <div class="test_layout row">
            <div class="test_layout col-11 title">
              <h4>
                Username
              </h4>
            </div>
            <div class=col-1>
              pad
            </div>
          </div>
          <div class="test_layout row">
            <div class="test_layout col-9">
              Content:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div style="height:10px"></div>
        </div>

        <div style="height:10px"></div>
        <!-- End of Main region -->
      </div>
      <div class="col-1">
      </div>
    </div>

  </div>
</template>

<style scoped lang="scss">
.body {
  margin-right: 20px;
}
textarea {
  resize: none;
}
.comment_area{
  padding-top:10px;
  padding-bottom:10px;
}
.post {
  padding: 10px;
  outline: 3px solid black;
}
.title {
  //padding: 10px;
}
.test_layout {
  //outline: 3px solid black;
}
</style>
