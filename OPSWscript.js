function CreateMemo() {
  var nameInput = document.getElementById("NameAdd");
  var memoInput = document.getElementById("MemoAdd");

  var name = nameInput.value.trim();
  var memo = memoInput.value.trim();

  if (!name || !memo) {
    alert("이름과 내용을 입력해주세요.");
    return;
  }

  var memoElement = document.createElement("div");
  memoElement.className = "memo";
  memoElement.textContent = `${name}: ${memo}`;

  document.getElementById("memoList").appendChild(memoElement);

  nameInput.value = "";
  memoInput.value = "";

  var updateButton = document.createElement("button");
  updateButton.textContent = "수정";
  updateButton.addEventListener("click", function() {
    UpdateMemo(memoElement);
  });

  var deleteButton = document.createElement("button");
  deleteButton.textContent = "삭제";
  deleteButton.addEventListener("click", function() {
    DeleteMemo(memoElement);
  });

  memoElement.appendChild(updateButton);
  memoElement.appendChild(deleteButton);
}

function UpdateMemo(memoElement) {
  var updatedMemo = prompt("수정할 내용을 입력하세요:");
  if (updatedMemo !== null && updatedMemo.trim() !== "") {
    memoElement.firstChild.textContent = updatedMemo;
  }
}

function DeleteMemo(memoElement) {
  memoElement.remove();
}

function SearchMemo() {
  var searchInput = document.getElementById("searchInput");
  var searchTerm = searchInput.value.trim().toLowerCase();

  var memos = document.getElementsByClassName("memo");

  for (var i = 0; i < memos.length; i++) {
    var memoText = memos[i].textContent.toLowerCase();

    if (memoText.includes(searchTerm)) {
      memos[i].style.display = "block";
    } else {
      memos[i].style.display = "none";
    }
  }

  searchInput.value = "";
}