// const mongoose = require('mongoose');
// var Image = require('../database');

// mongoose.connect('mongodb://localhost/frbo', { useNewUrlParser: true });

// var images = [
//   new Image({
//     imagePath: 'https://s3.us-west-1.amazonaws.com/frbo-images/23958457_image1.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEC4aCXVzLWVhc3QtMSKAAmmY%2FS7%2BABsAOP6vp8Xm9pKDVMezmGhEldIUHJkxPepeUuu4jDlbEGSHSLORsYQI7ASjSCk3GtkikxI5ZFCn1%2BBIk5dczQLO85E8FAjYf%2Ft%2FwiOZbT0MzjByeCMhKeGRMc7ZjjuBuozEiHVzlc4JgKWr6KFWv85E4q0iiVBEgUzno8N2GMr8mLz449N2eoOkMJbDWKuRy4dzVYDP6mZ%2BosUEcl88iRQsojBsK7XcgcmTV%2BiEuQ%2Bcp%2FcTCmH%2BpRY3%2FLa%2Fki%2F116iAN9BVZym5MuMmX%2BIo%2FsqEANJWhx5lppSuIy12UeTGUwAl2RqZnZbErxKBkvKqY9c%2BHdOtZ2XwB%2F0q5AMIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMzI3ODIyMTE0MjUiDNeYiSHXBc6cCa87viq4A5b%2BlPFpt2VuVF%2ByMhBcEbfplbRkqRJwxSHcgNNfvjRfaXRNtTPeiyyL5StzbGb4XthqWwlfL2vUhXjV2sV0BIpwrxvLQiw9jQXHoXX4PjjjLlMR373f%2FsoNaKvAxXOdompC1ADGz%2Fn5oLIlT2BuhoTfu91%2FHmzmnCEeu53Ans4kymXTWtX1Uev0lNteK5Y44cLx2L9bYh92J%2BP2IkiRpiFrHdC0cH4k3SjKBQLz%2BTQWCtElCJhdAFDF3GVNj4RA%2F%2FL0ECIMnWDTM%2FQY%2FwYxEXXFe3xC8UL2jjKpRH%2Bj%2Bx559iOSrRLscVbnWtLRr%2BvHLdL9mBpRWEnnEtlzZSFDKhgPmEUZb1Yr0oNe14occxZwjomzr0I4iQ%2FDVRdNWiMcfnntocljWMfBaKywXHGZTZhUltOa01aPpLn9DVFMtrROMcZsw1SIzjfj%2Bwxh0gtwqiSXK9M0TmYm03tzS6L8OmJ1g%2F9IzmsSk8ZLrFR9kUSnpUSw0CPhOOfOlzaJNRnbfK5BoGmf2yRZPgV1FdKTum2enLQ6IYxRSS84vwr1hNOC16UIlnpeYSgE1g3sz3x0IbfPOx2clVoaMOSlieUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190401T183227Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATMMXGVFQWTPREUVD%2F20190401%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=2a549924ba11b0fb40695941e4feb074f7f2650a8b4d019918b3adad4e544bc7',
//     imageId: 23958457,
//     imageIndex: 1
//   }),
//   new Image({
//     imagePath: 'https://s3.us-west-1.amazonaws.com/frbo-images/23958457_image2.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEC4aCXVzLWVhc3QtMSKAAmmY%2FS7%2BABsAOP6vp8Xm9pKDVMezmGhEldIUHJkxPepeUuu4jDlbEGSHSLORsYQI7ASjSCk3GtkikxI5ZFCn1%2BBIk5dczQLO85E8FAjYf%2Ft%2FwiOZbT0MzjByeCMhKeGRMc7ZjjuBuozEiHVzlc4JgKWr6KFWv85E4q0iiVBEgUzno8N2GMr8mLz449N2eoOkMJbDWKuRy4dzVYDP6mZ%2BosUEcl88iRQsojBsK7XcgcmTV%2BiEuQ%2Bcp%2FcTCmH%2BpRY3%2FLa%2Fki%2F116iAN9BVZym5MuMmX%2BIo%2FsqEANJWhx5lppSuIy12UeTGUwAl2RqZnZbErxKBkvKqY9c%2BHdOtZ2XwB%2F0q5AMIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMzI3ODIyMTE0MjUiDNeYiSHXBc6cCa87viq4A5b%2BlPFpt2VuVF%2ByMhBcEbfplbRkqRJwxSHcgNNfvjRfaXRNtTPeiyyL5StzbGb4XthqWwlfL2vUhXjV2sV0BIpwrxvLQiw9jQXHoXX4PjjjLlMR373f%2FsoNaKvAxXOdompC1ADGz%2Fn5oLIlT2BuhoTfu91%2FHmzmnCEeu53Ans4kymXTWtX1Uev0lNteK5Y44cLx2L9bYh92J%2BP2IkiRpiFrHdC0cH4k3SjKBQLz%2BTQWCtElCJhdAFDF3GVNj4RA%2F%2FL0ECIMnWDTM%2FQY%2FwYxEXXFe3xC8UL2jjKpRH%2Bj%2Bx559iOSrRLscVbnWtLRr%2BvHLdL9mBpRWEnnEtlzZSFDKhgPmEUZb1Yr0oNe14occxZwjomzr0I4iQ%2FDVRdNWiMcfnntocljWMfBaKywXHGZTZhUltOa01aPpLn9DVFMtrROMcZsw1SIzjfj%2Bwxh0gtwqiSXK9M0TmYm03tzS6L8OmJ1g%2F9IzmsSk8ZLrFR9kUSnpUSw0CPhOOfOlzaJNRnbfK5BoGmf2yRZPgV1FdKTum2enLQ6IYxRSS84vwr1hNOC16UIlnpeYSgE1g3sz3x0IbfPOx2clVoaMOSlieUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190401T183419Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATMMXGVFQWTPREUVD%2F20190401%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=8c375acab37b4fc2c94e7af00643b4abe86ea511a54ef0cdd0705648143b7deb',
//     imageId: 23958457,
//     imageIndex: 2
//   }),
//   new Image({
//     imagePath: 'https://s3.us-west-1.amazonaws.com/frbo-images/23958457_image3.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEC4aCXVzLWVhc3QtMSKAAmmY%2FS7%2BABsAOP6vp8Xm9pKDVMezmGhEldIUHJkxPepeUuu4jDlbEGSHSLORsYQI7ASjSCk3GtkikxI5ZFCn1%2BBIk5dczQLO85E8FAjYf%2Ft%2FwiOZbT0MzjByeCMhKeGRMc7ZjjuBuozEiHVzlc4JgKWr6KFWv85E4q0iiVBEgUzno8N2GMr8mLz449N2eoOkMJbDWKuRy4dzVYDP6mZ%2BosUEcl88iRQsojBsK7XcgcmTV%2BiEuQ%2Bcp%2FcTCmH%2BpRY3%2FLa%2Fki%2F116iAN9BVZym5MuMmX%2BIo%2FsqEANJWhx5lppSuIy12UeTGUwAl2RqZnZbErxKBkvKqY9c%2BHdOtZ2XwB%2F0q5AMIk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMzI3ODIyMTE0MjUiDNeYiSHXBc6cCa87viq4A5b%2BlPFpt2VuVF%2ByMhBcEbfplbRkqRJwxSHcgNNfvjRfaXRNtTPeiyyL5StzbGb4XthqWwlfL2vUhXjV2sV0BIpwrxvLQiw9jQXHoXX4PjjjLlMR373f%2FsoNaKvAxXOdompC1ADGz%2Fn5oLIlT2BuhoTfu91%2FHmzmnCEeu53Ans4kymXTWtX1Uev0lNteK5Y44cLx2L9bYh92J%2BP2IkiRpiFrHdC0cH4k3SjKBQLz%2BTQWCtElCJhdAFDF3GVNj4RA%2F%2FL0ECIMnWDTM%2FQY%2FwYxEXXFe3xC8UL2jjKpRH%2Bj%2Bx559iOSrRLscVbnWtLRr%2BvHLdL9mBpRWEnnEtlzZSFDKhgPmEUZb1Yr0oNe14occxZwjomzr0I4iQ%2FDVRdNWiMcfnntocljWMfBaKywXHGZTZhUltOa01aPpLn9DVFMtrROMcZsw1SIzjfj%2Bwxh0gtwqiSXK9M0TmYm03tzS6L8OmJ1g%2F9IzmsSk8ZLrFR9kUSnpUSw0CPhOOfOlzaJNRnbfK5BoGmf2yRZPgV1FdKTum2enLQ6IYxRSS84vwr1hNOC16UIlnpeYSgE1g3sz3x0IbfPOx2clVoaMOSlieUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190401T183428Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATMMXGVFQWTPREUVD%2F20190401%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=60ad2a519f8c338dd0c6c155c5a9fa24dcc6d160ac2b49e218206cb3fc34b06f',
//     imageId: 23958457,
//     imageIndex: 3
//   }),
//   new Image({
//     imagePath: 'https://s3.us-west-1.amazonaws.com/frbo-images/23958457_image4.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEEMaCXVzLXdlc3QtMSKAAiY83bdeW4gIQRmiAZkCirvdJxSzymbT0z%2B3Ml6gcXk6eO3jnRBxVC9tjuFGuwWwJmddLyXUR%2BfGNXQoYMbf7aa3ga7mh56Dpbuscgq1yXU%2B5ai%2Fmh2OwZxWpVND4pk8tNgKj%2F04GgyMV6r0enBKvjt354WczJ4Xytp%2Fz4MryawP7zNCqoJO1EaH3Df%2BiQuYm841ID8ucuIyi7bl2eHCnlcJgyRw6SZW1CGYBCu5ZMWPth7e2zEnTFXYJdMLBYFs4Ia7WStbuADNerD4fFmP1kL%2FhCUvgXQKSbe4NV8iLNlskuPrw7zTUk5CMIiU1KtMcm10yH8C5WYQ2GOBkicTJ0oq5AMIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMzI3ODIyMTE0MjUiDLUROiBmLSewa7RlJCq4A2bXKja7%2BklU7mEcTK6qa59ZAUj1AajZSc%2Bhg%2FJfmUihtxai7DxSh%2BPi%2B7pjPwMJhB85INgBj7Ywyhufp%2FXO2kpqSzXvTGx%2B32j%2FuO3W71c%2FDzkTrBO2bJB3y2OppegmzYXWaFassuUbLcVxKGYnt3%2Bb8OuzEZNGLvyog4P3wA7kb2l18KFMqTZghCaX9LoK0IMqmyJCUsi3XUGlDKxmdEBiSOB4NeR%2FNBBiPZSW0j5qOMx6looiTdgMwHrP8dycr1lfBvbmDg8xgIW4JHnOCXv%2BtLh%2BTqNzwZ1FVqm30d%2FIc8Hve8209%2Bl5p64qb2rDjJCwZsiLooNlS9ExQTHw0rIPwlOJt9bOn8q50mKabKijsfZoHZ45by6Tb7TFxsDQ4%2BWYmWWHQiQP%2BDOTdXhTHOoDp0KmwBioi%2BCwFOLEuquolHV4%2BVxsi1QEf2x814y15b6Hus2awFhmhtY4bGFoPbKTOFqRsoEqnYchmkDQulI2QRIH%2FUf3eWYnU5J0bUWMuLRlYc3maJ5xrhE7IxnBD2v8En3132hM8K25Hy3VFeLiYu04LvEUchWbiCwIacZOM4xok3LRoabXMIj0jeUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190402T150530Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATMMXGVFQS6KEO7EL%2F20190402%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=c8c71d2c951cf82dbc9fb2a8860fba67961f2735dbea00825674e22552b2c401',
//     imageId: 23958457,
//     imageIndex: 4
//   }),
//   new Image({
//     imagePath: 'https://s3.us-west-1.amazonaws.com/frbo-images/23958457_image5.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEEMaCXVzLXdlc3QtMSKAAiY83bdeW4gIQRmiAZkCirvdJxSzymbT0z%2B3Ml6gcXk6eO3jnRBxVC9tjuFGuwWwJmddLyXUR%2BfGNXQoYMbf7aa3ga7mh56Dpbuscgq1yXU%2B5ai%2Fmh2OwZxWpVND4pk8tNgKj%2F04GgyMV6r0enBKvjt354WczJ4Xytp%2Fz4MryawP7zNCqoJO1EaH3Df%2BiQuYm841ID8ucuIyi7bl2eHCnlcJgyRw6SZW1CGYBCu5ZMWPth7e2zEnTFXYJdMLBYFs4Ia7WStbuADNerD4fFmP1kL%2FhCUvgXQKSbe4NV8iLNlskuPrw7zTUk5CMIiU1KtMcm10yH8C5WYQ2GOBkicTJ0oq5AMIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMzI3ODIyMTE0MjUiDLUROiBmLSewa7RlJCq4A2bXKja7%2BklU7mEcTK6qa59ZAUj1AajZSc%2Bhg%2FJfmUihtxai7DxSh%2BPi%2B7pjPwMJhB85INgBj7Ywyhufp%2FXO2kpqSzXvTGx%2B32j%2FuO3W71c%2FDzkTrBO2bJB3y2OppegmzYXWaFassuUbLcVxKGYnt3%2Bb8OuzEZNGLvyog4P3wA7kb2l18KFMqTZghCaX9LoK0IMqmyJCUsi3XUGlDKxmdEBiSOB4NeR%2FNBBiPZSW0j5qOMx6looiTdgMwHrP8dycr1lfBvbmDg8xgIW4JHnOCXv%2BtLh%2BTqNzwZ1FVqm30d%2FIc8Hve8209%2Bl5p64qb2rDjJCwZsiLooNlS9ExQTHw0rIPwlOJt9bOn8q50mKabKijsfZoHZ45by6Tb7TFxsDQ4%2BWYmWWHQiQP%2BDOTdXhTHOoDp0KmwBioi%2BCwFOLEuquolHV4%2BVxsi1QEf2x814y15b6Hus2awFhmhtY4bGFoPbKTOFqRsoEqnYchmkDQulI2QRIH%2FUf3eWYnU5J0bUWMuLRlYc3maJ5xrhE7IxnBD2v8En3132hM8K25Hy3VFeLiYu04LvEUchWbiCwIacZOM4xok3LRoabXMIj0jeUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190402T150550Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATMMXGVFQS6KEO7EL%2F20190402%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=78ecb3518466034d06de20bd1bdd64659d59a3892efad7416edea551e11d5225',
//     imageId: 23958457,
//     imageIndex: 5
//   }),
//   new Image({
//     imagePath: 'https://s3.us-west-1.amazonaws.com/frbo-images/23958457_image6.jpg?response-content-disposition=inline&X-Amz-Security-Token=AgoGb3JpZ2luEEMaCXVzLXdlc3QtMSKAAiY83bdeW4gIQRmiAZkCirvdJxSzymbT0z%2B3Ml6gcXk6eO3jnRBxVC9tjuFGuwWwJmddLyXUR%2BfGNXQoYMbf7aa3ga7mh56Dpbuscgq1yXU%2B5ai%2Fmh2OwZxWpVND4pk8tNgKj%2F04GgyMV6r0enBKvjt354WczJ4Xytp%2Fz4MryawP7zNCqoJO1EaH3Df%2BiQuYm841ID8ucuIyi7bl2eHCnlcJgyRw6SZW1CGYBCu5ZMWPth7e2zEnTFXYJdMLBYFs4Ia7WStbuADNerD4fFmP1kL%2FhCUvgXQKSbe4NV8iLNlskuPrw7zTUk5CMIiU1KtMcm10yH8C5WYQ2GOBkicTJ0oq5AMIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwyMzI3ODIyMTE0MjUiDLUROiBmLSewa7RlJCq4A2bXKja7%2BklU7mEcTK6qa59ZAUj1AajZSc%2Bhg%2FJfmUihtxai7DxSh%2BPi%2B7pjPwMJhB85INgBj7Ywyhufp%2FXO2kpqSzXvTGx%2B32j%2FuO3W71c%2FDzkTrBO2bJB3y2OppegmzYXWaFassuUbLcVxKGYnt3%2Bb8OuzEZNGLvyog4P3wA7kb2l18KFMqTZghCaX9LoK0IMqmyJCUsi3XUGlDKxmdEBiSOB4NeR%2FNBBiPZSW0j5qOMx6looiTdgMwHrP8dycr1lfBvbmDg8xgIW4JHnOCXv%2BtLh%2BTqNzwZ1FVqm30d%2FIc8Hve8209%2Bl5p64qb2rDjJCwZsiLooNlS9ExQTHw0rIPwlOJt9bOn8q50mKabKijsfZoHZ45by6Tb7TFxsDQ4%2BWYmWWHQiQP%2BDOTdXhTHOoDp0KmwBioi%2BCwFOLEuquolHV4%2BVxsi1QEf2x814y15b6Hus2awFhmhtY4bGFoPbKTOFqRsoEqnYchmkDQulI2QRIH%2FUf3eWYnU5J0bUWMuLRlYc3maJ5xrhE7IxnBD2v8En3132hM8K25Hy3VFeLiYu04LvEUchWbiCwIacZOM4xok3LRoabXMIj0jeUF&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20190402T150613Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIATMMXGVFQS6KEO7EL%2F20190402%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=927e3f223c3471b9658b86b5ff5b02775c6e089c227e41eb5c29d44c1415ac3e',
//     imageId: 23958457,
//     imageIndex: 6
//   }),
// ];

// var done = 0;
// for (var i = 0; i < images.length; i++) {
//   images[i].save(function(err, result) {
//     done++;
//     if (done === images.length) {
//       exit();
//     }
//   });
// }

// function exit() {
//   mongoose.disconnect();
// }