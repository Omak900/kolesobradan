window.onload = function () {
        var s = $(".wheel_btn"),
                e = $("#counter_num"),
                a = $(".wheel__spinner"),
                n = $(".bonus_1"),
                l = $(".bonus_2"),
                i = $(".wheel_txt"),
                t = $("#modal-content"),
                d = $(".fewmodal__1"),
                r = $(".fewmodal__2"),
                o = $(".popup_btn_1");
        switch (s.click(function () {
                s.hasClass("spin_1") && (s.removeClass("spin_1").attr("disabled", "disabled"), e.html("1"), a.removeClass("spin_1").addClass("wheel__spinner_animated-1").removeClass("wheel__spinner_animated"), i.fadeOut(), setTimeout(function () {
                        localStorage.currentSpin = "17009_spin_1",
                        a.removeClass("wheel__spinner_animated-1"),
                        n.fadeIn().addClass("showed"),
                        t.fadeIn().css("display", "flex"),
                        d.fadeIn().css("display", "flex"),
                        s.addClass("spin_2").removeClass("spin_1")
                }, 4500)),
                s.hasClass("spin_2") && (s.removeClass("spin_2").attr("disabled", "disabled"), e.html("0"), a.removeClass("spin_2").addClass("wheel__spinner_animated-2"), setTimeout(function () {
                        localStorage.currentSpin = "17009_spin_2",
                        a.removeClass("wheel__spinner_animated"),
                        l.fadeIn().addClass("showed"),
                        t.fadeIn().css("display", "flex"),
                        r.fadeIn().css("display", "flex")
                }, 4500))
        }), o.click(function () {
                s.removeAttr("disabled"),
                t.fadeOut(),
                d.fadeOut()
        }), localStorage.currentSpin) {
        case "17009_spin_1":
                e.html("1"),
                t.fadeIn().css("display", "flex"),
                d.fadeIn().css("display", "flex"),
                n.fadeIn().css("display", "block"),
                i.css("display", "none"),
                s.addClass("spin_2").removeClass("spin_1"),
                a.removeClass("wheel__spinner_animated").css("transform", "rotate(720deg)");
                break;
        case "17009_spin_2":
                e.html("0"),
                t.fadeIn().css("display", "flex"),
                r.fadeIn().css("display", "flex"),
                n.fadeIn().css("display", "block"),
                l.fadeIn().css("display", "block"),
                i.css("display", "none"),
                s.removeClass("spin_2"),
                a.removeClass("wheel__spinner_animated").css("transform", "rotate(1170deg)");
                break;
        default:
                e.html("2")
        }
        
};