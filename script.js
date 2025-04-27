// التحقق من إجابة المرحلة 1
function checkAnswer1() {
  const answer1 = document.getElementById('answer1').value.toUpperCase();
  if (answer1 === "HELLO") {  // الإجابة الصحيحة
    alert('إجابة صحيحة! انتقل إلى المرحلة التالية.');
    document.getElementById('stage1').style.display = 'none';
    document.getElementById('stage2').style.display = 'block';
  } else {
    alert('إجابة خاطئة! حاول مرة أخرى.');
  }
}

// التحقق من إجابة المرحلة 2
function checkAnswer2() {
  const answer2 = document.getElementById('answer2').value.toUpperCase();
  if (answer2 === "YOU") {  // الإجابة الصحيحة
    alert('إجابة صحيحة! انتقل إلى المرحلة التالية.');
    document.getElementById('stage2').style.display = 'none';
    document.getElementById('stage3').style.display = 'block';
  } else {
    alert('إجابة خاطئة! حاول مرة أخرى.');
  }
}

// التحقق من إجابة المرحلة 3
function checkAnswer3() {
  const answer3 = document.getElementById('answer3').value.toUpperCase();
  if (answer3 === "ARE") {  // الإجابة الصحيحة
    alert('إجابة صحيحة! انتقل إلى المرحلة التالية.');
    document.getElementById('stage3').style.display = 'none';
    document.getElementById('stage4').style.display = 'block';
  } else {
    alert('إجابة خاطئة! حاول مرة أخرى.');
  }
}

// التحقق من إجابة المرحلة 4
function checkAnswer4() {
  const answer4 = document.getElementById('answer4').value;
  if (answer4 == 1) {  // الإجابة الصحيحة 
    alert('إجابة صحيحة! انتقل إلى المرحلة التالية.');
    document.getElementById('stage4').style.display = 'none';
    document.getElementById('stage5').style.display = 'block';
  } else {
    alert('إجابة خاطئة! حاول مرة أخرى.');
  }
}

// التحقق من إجابة المرحلة 5
function checkAnswer5() {
  const answer5 = document.getElementById('answer5').value.toUpperCase();
  if (answer5 === "WIN") {  // الإجابة الصحيحة
    alert('إجابة صحيحة! تم حل الشيفرة بنجاح.');
    document.getElementById('stage5').style.display = 'none';
    document.getElementById('winnerMessage').style.display = 'block';  // عرض رسالة الفوز
  } else {
    alert('إجابة خاطئة! حاول مرة أخرى.');
  }
}
