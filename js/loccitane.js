$(document).ready(function(){
    cartControl();
    emptyMessage();
    detailSlider(".bxslider");
    thumbnailactive();
    cartRemove();
    toggleTab(".detailcontainer div:nth-of-type(2) > ul > li input[type='button']");
    payment();
    panelControl(".openButton");
    moreproduct();
    listcolorChange();
    helpIf();
    account();
    quantitybutton();
    $('.application').on('click', function() {

        if ( this.host !== window.location.host ) {
            if ( window.confirm('https://www.loccitane.com에서 이 애플리케이션을 열려고 합니다.') ) {
                // They clicked Yes
                console.log('you chose to leave. bye.');
            }
            else {
                // They clicked no
                console.log('you chose to stay here.');
                return false
            }
        }
    }); 
});
function cartControl() {
    $(".cartButton").click(function () {
        $(".cartPanel").show();
    });
    
    $(".closeButton").click(function () {
        $(".cartPanel").hide();
    });
}
function panelControl(target){
    var currentPanel = null;
    $(target).click(function(){
        currentPanel = "#" + $(this).attr('data-panel');
        $(currentPanel).addClass("active");
    });
    $(".closeButton").click(function(){
        $(currentPanel).removeClass("active");
    });
}
function emptyMessage() {
    $(".reMove").click(function () {
        $("#emptyMessage").show();
    });
    
    $(".closeButton").click(function () {
        $(".filterPanel").hide();
    });
}
function detailSlider(target){
    $(target).bxSlider({
        mode: 'fade',
        pagerCustom: ".thumbNailPager"
    });
}
function toggleTab(target){
    var currentTab = null;
    $(target).click(function(){
        currentTab = "#" + $(this).attr("data-tab");
        $("[id^=hidden]").removeClass("active");
        $(currentTab).addClass("active");
        $(target).removeClass("active");
        $(this).addClass("active");
    });
    // $('#toggleButton1').click(function() {
    //     $('#hiddenContent1').show();
    //     $('#hiddenContent2').hide();
    //     $('#hiddenContent3').hide();
    //   });
  
    //   $('#toggleButton2').click(function() {
    //     $('#hiddenContent1').hide();
    //     $('#hiddenContent2').show();
    //     $('#hiddenContent3').hide();
    //   });
  
    //   $('#toggleButton3').click(function() {
    //     $('#hiddenContent1').hide();
    //     $('#hiddenContent2').hide();
    //     $('#hiddenContent3').show();
    //   });
}
function thumbnailactive() {
// 페이지 로드 시 첫 번째 li에 초기 테두리 추가
$(".thumbNailPager li:first-child").addClass("active");

// 각 li 요소에 클릭 이벤트 추가
$(".thumbNailPager li").click(function () {
    // 모든 li에서 active 클래스 제거
    $(".thumbNailPager li").removeClass("active");
    // 클릭된 li에 active 클래스 추가
    $(this).addClass("active");
});
}

function cartRemove(){
    // removeButton을 찾아 이벤트를 추가합니다.
    $('.removeButton').on('click', function() {
        // 클릭한 removeButton이 속한 li를 찾습니다.
        var li = $(this).closest('li');
        
        // li가 존재하면 제거합니다.
        if (li.length > 0) {
            li.remove();
            // ul 안에 더 이상 li가 없으면 mybag 폼을 숨기고 대신 아래에 있는 div를 보여줍니다.
            var ul = $('.mybag ul');
            // console.log($(".mybag form > div > ul li").length);
            if (!ul || $(".mybag form > div > ul li").length == 0) {
                $('.mybag > form > div').hide();
                $('.mybag > .mybagempty').show();
            }
        }
    });
}



function payment(){
    // creditCard 라디오 버튼 클릭 시
    $("#creditCard").click(function(){
        $(".targetDiv").show();
    });

    // payPal 라디오 버튼 클릭 시
    $("#payPal").click(function(){
        $(".targetDiv").hide();
    });

    $(".xbutton").click(function(){
        $(".paymentpanel").css("display", "none");
        $(".xbuttonpanel").css("display", "block");
      });
    $(".xbuttonpanelClose").click(function(){
        $(".paymentpanel").css("display", "block");
        $(".xbuttonpanel").css("display", "none");
    });
      
    $(".xbutton").click(function(){
        $(".addresspanel").css("display", "none");
        $(".xbuttonpanel").css("display", "block");
      });
    $(".xbuttonpanelClose").click(function(){
        $(".addresspanel").css("display", "block");
        $(".xbuttonpanel").css("display", "none");
    });

    $(".reMove").click(function(){
        $("#productin").css("display", "none");
        $(".cartpanelEmpty").css("display", "block");
    });

    // $(".justToggle").click(function(){
    //     $("#ingredientList").css("display", "block");
    //     $("#ingredientList").css("display", "none");
    // });

    $(".menuopenbt").click(function(){
        $(".menupanel").css("display", "block");
    });
    $(".menuclosebt").click(function(){
        $(".menupanel").css("display", "none");
    });

};

function moreproduct(){
    $(".newinButton").click(function(){
        $(".newin").css("display", "block");
        $(".nature").css("display", "none");
        $(".mostlove").css("display", "none");
      });
    $(".mostloveButton").click(function(){
        $(".newin").css("display", "none");
        $(".nature").css("display", "none");
        $(".mostlove").css("display", "block");
      });
    $(".natureButton").click(function(){
        $(".nature").css("display", "block");
        $(".mostlove").css("display", "none");
        $(".newin").css("display", "none");
    });
};

function listcolorChange() {
    $('.footerTermsConditions > div:first-of-type > ul > li > a').on('click', function(){
        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });
};


function helpIf(){
    // 선택자를 사용하여 클래스 속성이 "morebt"로 시작하는 모든 요소에 대해 click 이벤트 핸들러를 등록합니다.
    $('[class^="morebt"]').click(function() {
        // 클릭된 요소에 'active' 클래스를 토글(toggle)합니다.
        $(this).toggleClass('active');

        // 클릭된 요소의 다음에 위치한 클래스 속성이 "moredata"로 시작하는 요소를 찾아 슬라이드 토글합니다.
        $(this).next('[class^="moredata"]').slideToggle();
    });
};

function account(){
    $('[class^="account"] > div:first-of-type > div > strong').click(function() {
        $(this).toggleClass('active');
        // 클릭된 요소의 다음 형제인 "accountpn" 클래스를 가진 요소의 display 속성을 토글합니다.
        $('[class^="account"] > div:first-of-type > aside').toggle();
    });
    $('.justToggle').click(function() {
        $('#ingredientList').toggleClass('close');
        $('#ingredientList').toggle();
    });
};


function quantitybutton(){
    // Initial value
    var counterValue = 1;

    // Event handler for the minus button
    $('.minus').on('click', function(){
        if (counterValue > 1) {
            counterValue--;
            $('#counter').val(counterValue);
        }
    });

    // Event handler for the plus button
    $('.plus').on('click', function(){
        counterValue++;
        $('#counter').val(counterValue);
    });
};

// function menu(){
//     $(".menuicon").click(function () {
//         $(".menupanel").toggle();
//     });
// };


