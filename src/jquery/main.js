/**
 * Created by user on 07.02.17.
 */
$(() => {
    $("body").css("background", "green");
    function blink(element, times) {
        element.fadeToggle("slow", () => {
            if (--times > 0) {
                if (element.css("display") == "none")
                    p.text(times);
                blink(element, times);
            }
        });
    }

    let block = $("div");
    let p = $("p");
    blink(block, 10);
});
