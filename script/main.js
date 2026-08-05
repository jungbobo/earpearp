$(function () {
    const $newList = $('.new .product_list');
    const $newCards = $('.new .product_card');
    const $prevBtn = $('.new .prev_btn');
    const $nextBtn = $('.new .next_btn');

    const cardWidth = $newCards.outerWidth();
    const gap = 40;
    const moveDistance = cardWidth + gap;

    let currentIndex = 0;
    const visibleCards = 3;
    const maxIndex = $newCards.length - visibleCards;

    function updateButtons() {
        if (currentIndex <= 0) {
            $prevBtn.prop('disabled', true);
        } else {
            $prevBtn.prop('disabled', false);
        }

        if (currentIndex >= maxIndex) {
            $nextBtn.prop('disabled', true);
        } else {
            $nextBtn.prop('disabled', false);
        }
    }

    updateButtons();

    $nextBtn.on('click', function () {
        if (currentIndex < maxIndex) {
            currentIndex++;
            $newList.stop().animate({
                marginLeft: -moveDistance * currentIndex + 'px'
            }, 400);
            updateButtons();
        }
    });

    $prevBtn.on('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            $newList.stop().animate({
                marginLeft: -moveDistance * currentIndex + 'px'
            }, 400);
            updateButtons();
        }
    });


    const $bestList = $('.best .product_list');
  const $bestCards = $('.best .product_card');
  const $bestPrevBtn = $('.best .prev_btn');
  const $bestNextBtn = $('.best .next_btn');

  const bestCardWidth = $bestCards.outerWidth();
  const bestMoveDistance = bestCardWidth + gap;
  
  let bestCurrentIndex = 0;
  const bestMaxIndex = $bestCards.length - visibleCards;

  function updateBestButtons() {
    if (bestCurrentIndex <= 0) {
      $bestPrevBtn.prop('disabled', true);
    } else {
      $bestPrevBtn.prop('disabled', false);
    }

    if (bestCurrentIndex >= bestMaxIndex) {
      $bestNextBtn.prop('disabled', true);
    } else {
      $bestNextBtn.prop('disabled', false);
    }
  }

  updateBestButtons();

  $bestNextBtn.on('click', function () {
    if (bestCurrentIndex < bestMaxIndex) {
      bestCurrentIndex++;
      $bestList.stop().animate({
        marginLeft: -bestMoveDistance * bestCurrentIndex + 'px'
      }, 400);
      updateBestButtons();
    }
  });

  $bestPrevBtn.on('click', function () {
    if (bestCurrentIndex > 0) {
      bestCurrentIndex--;
      $bestList.stop().animate({
        marginLeft: -bestMoveDistance * bestCurrentIndex + 'px'
      }, 400);
      updateBestButtons();
    }
  });
});