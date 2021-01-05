function starScore(star) {
        var activeStar = '<img src="/user/themes/zenloop/img/reviews-portal/star-Active.svg" />';
        var emptyStar = '<img src="/user/themes/zenloop/img/reviews-portal/star-grey.svg" />';
            switch(Math.round(star)) {
                case 1:
                    document.write(activeStar + emptyStar + emptyStar + emptyStar + emptyStar);
                    break;
                case 2:
                    document.write(activeStar + activeStar + emptyStar + emptyStar + emptyStar);
                    break;
                case 3:
                    document.write(activeStar + activeStar + activeStar + emptyStar + emptyStar);
                    break;
                case 4:
                    document.write(activeStar + activeStar + activeStar + activeStar + emptyStar);
                    break;
                case 5:
                    document.write(activeStar + activeStar + activeStar + activeStar + activeStar);
                    break;
                default:
                    document.write('-');
                    break;
            }
        }
