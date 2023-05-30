function runTests() {
    if (test1()) {
      console.log("Test 1 passed ✅"); // Checkmark emoji added
    } else {
      console.log("Test 1 failed ❌");
    }

    if (test2()) {
      console.log("Test 2 passed ✅"); // Checkmark emoji added
    } else {
      console.log("Test 2 failed ❌");
    }

    if (test3()) {
      console.log("Test 3 passed ✅"); // Checkmark emoji added
    } else {
      console.log("Test 3 failed ❌");
    }

    if (allTestsPassed()) {
      console.log("Code bono~! ✅"); // Checkmark emoji added
    } else {
      console.log("Code has issues ❌");
    }
  }

  function test1() {
    return !!document.getElementById('chatbox');
  }

  function test2() {
    return !!document.getElementById('messageInput');
  }

  function test3() {
    return !!document.getElementById('sendButton');
  }

  function test4() {
      return chatbox.scrollHeight > chatbox.clientHeight;
  }

  function allTestsPassed() {
    return test1() && test2() && test3();
  }

  runTests(); // Execute the tests when the page loads
