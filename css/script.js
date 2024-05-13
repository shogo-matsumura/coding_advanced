<script>
    $(document).ready(function() {
        $('.hamburger-menu').click(function() {
            $('.navigation').slideToggle('slow', function() {
                if ($(this).is(':visible')) {
                    $('.page-content').css('margin-top', '200px');
                } else {
                    $('.page-content').css('margin-top', '0');
                }
            });
        });
    });
    <script>
    document.addEventListener('DOMContentLoaded', function () {
    let toggles = document.querySelectorAll('.toggle');
        toggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                var list = this.nextElementSibling;
                list.style.display = list.style.display === 'block' ? 'none' : 'block';
                
            });
        });
    });
</script>
</script>

