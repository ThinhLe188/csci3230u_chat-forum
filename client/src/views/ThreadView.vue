<template>
  <div class="body">
    <div style="height:20px">
    </div>
    <div class="row">
      <div class="col-1">
      </div>

      <div class="col-10">
        <div  class="post form-outline">
          <div class="test_layout row">
            <div class="test_layout col-9 title">
              <h1 id='thread_title'>
                Thread Title
              </h1>
            </div>
            <div class="test_layout col-3">
              <div class="row">
                Posted by:&nbsp;
                <div id="poster_name"></div>
              </div>
              <div class="row">
                Posted on:&nbsp;
                <div id="posted_date"></div>
              </div>
            </div>
          </div>
          <div class="test_layout row">
            <div id="thread_content" class="test_layout col-9">
            </div>
          </div>
          <div class="row" style="padding-left:20px; padding-top:10px">
            <i id="main_like" class="bi bi-hand-thumbs-up hover_button like"></i>
            <div id="likes" style="padding-left:8px;padding-right:8px"></div>
            <i id="main_dislike" class="bi bi-hand-thumbs-down hover_button dislike"></i>
          </div>
        </div>
        <!-- Reply Box -->
        <div class="comment_area">
          <p style="margin-bottom:5px">Comment:</p>
          <textarea style="width:100%; height:80px">

          </textarea>
          <div class=row>
            <div class="col-12"><input type="button" value="Post Comment" style="float: right"/></div>
          </div>
        </div>
        <!-- Comment Section -->
        <div id=comment_section></div>

        <!-- <div class="post form-outline">
          <div class="test_layout row">
            <div class="test_layout col-12 title">
              <h5>
                Username
              </h5>
            </div>
          </div>
          <div class="test_layout row">
            <div class="test_layout col-11">
              Content:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div style="height:10px"></div>
          </div>

          <div style="height:10px"></div>

        <div class="post form-outline">
          <div class="test_layout row">
            <div class="test_layout col-12 title">
              <h5>
                Username
              </h5>
            </div>
          </div>
          <div class="test_layout row">
            <div class="test_layout col-11">
              Content:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div style="height:10px"></div>
          <div class="row">
            <div class="col-1">
            </div>
            <div class="col-11">
              <div class="post">
          <div class="row">
            <div class="col-12 title">
              <h5>
                Username
              </h5>
            </div>
          </div>
          <div class=" row">
            <div class="col-11">
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
            <div class="test_layout col-12 title">
              <h5>
                Username
              </h5>
            </div>
          </div>
          <div class="test_layout row">
            <div class="test_layout col-10">
              Content:  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </div>
          </div>
          <div style="height:10px"></div>
        </div>
        -->
        <div style="height:10px"></div>

        <!-- End of Main region -->
      </div>
      <div class="col-1">
      </div>
    </div>

  </div>
</template>

<script>
document.addEventListener('DOMContentLoaded', function () {
  var postId = 1
  var mainThread = getThread(postId)

  document.getElementById('thread_title').innerHTML = mainThread.title

  document.getElementById('poster_name').innerHTML = getUsername(mainThread.creatorId)

  const postedDate = new Date(mainThread.date)
  document.getElementById('posted_date').innerHTML = postedDate.toDateString()

  document.getElementById('thread_content').innerHTML = mainThread.content

  document.getElementById('likes').innerHTML = mainThread.votes

  buildCommentSection(getReplies(postId), document.getElementById('comment_section'))
}, false)

function getThread (id) {
  return {
    creatorId: 1,
    parentId: 0,
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    votes: 17,
    date: Date.now(),
    title: 'Thread Title!',
    tags: [],
    image: ''
  }
}

function getUsername (id) {
  return 'Joe Username'
}

function getReplies (id) {
  if (id === 1) {
    return [2, 3, 4]
  } else if (id === 3) {
    return [5]
  } else {
    return []
  }
}
function buildCommentSection (replies, parentDiv) {
  for (var i = 0; i < replies.length; i++) {
    buildComment(replies[i], parentDiv)
  }
}
function buildComment (id, parentDiv) {
  var comment = getThread(id)
  var elementA = null
  var elementB = null

  var spacer = document.createElement('div')
  spacer.setAttribute('style', 'height:10px')
  parentDiv.appendChild(spacer)

  var postForm = document.createElement('div')
  postForm.setAttribute('class', 'post')
  parentDiv.appendChild(postForm)

  // Username
  elementA = document.createElement('div')
  elementA.setAttribute('class', 'row')
  postForm.appendChild(elementA)

  elementB = document.createElement('div')
  elementB.setAttribute('class', 'col')
  elementA.appendChild(elementB)

  elementA = document.createElement('h5')
  elementA.innerHTML = getUsername(comment.creatorId)
  elementB.appendChild(elementA)

  // Content
  elementA = document.createElement('div')
  elementA.setAttribute('class', 'row')
  postForm.appendChild(elementA)

  elementB = document.createElement('div')
  elementB.setAttribute('class', 'col-11')
  elementB.innerHTML = comment.content
  elementA.appendChild(elementB)

  // Like, Dislike, Reply
  elementA = document.createElement('div')
  elementA.setAttribute('class', 'row')
  elementA.setAttribute('style', 'padding-left:20px; padding-top:10px')
  postForm.appendChild(elementA)

  // Like
  elementB = document.createElement('i')
  elementB.setAttribute('class', 'bi bi-hand-thumbs-up hover_button like')
  elementA.appendChild(elementB)
  // Like Count
  elementB = document.createElement('div')
  elementB.setAttribute('id', id + '_likes')
  elementB.innerHTML = comment.votes
  elementB.setAttribute('style', 'padding-left:8px;padding-right:8px')
  elementA.appendChild(elementB)
  // Dislike
  elementB = document.createElement('i')
  elementB.setAttribute('class', 'bi bi-hand-thumbs-down hover_button dislike')
  elementA.appendChild(elementB)

  // Replies
  elementA = document.createElement('div')
  elementA.setAttribute('class', 'row')
  postForm.appendChild(elementA)

  elementB = document.createElement('div')
  elementB.setAttribute('class', 'col-1')
  elementA.appendChild(elementB)

  elementB = document.createElement('div')
  elementB.setAttribute('class', 'col-11')
  elementA.appendChild(elementB)
  buildCommentSection(getReplies(id), elementB)
}
</script>

<style lang="scss">
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
  outline: 1px solid black !important;
}
.like:hover {
  color: rgb(1, 187, 1);
}
.dislike:hover {
  color: red;
}
.hover_button:hover {
  cursor: pointer;
}
</style>
