import Song from '../models/Song';
import Genre from '../models/Genre';

export const GENRES = [
  new Genre(
    '1',
    'Romantic',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600086093/rom_rzxckc.jpg',
  ),
  new Genre(
    '2',
    'Soothing',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600086191/soothing_l2fhdm.jpg',
  ),
  new Genre(
    '3',
    'Rock-on',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600086245/rockon_fgsbfk.jpg',
  ),
  new Genre(
    '4',
    'Classics',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600085955/classics_h9mj11.jpg',
  ),
  new Genre(
    '5',
    'Workout',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600086391/workout_qa5lhh.jpg',
  ),
  new Genre(
    '6',
    'Dance',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600085955/dance_bzgn8j.jpg',
  ),
];

export const ROM = [
  new Song(
    '0',
    '1',
    'Tera Hone Laga Hoon',
    'Atif Aslam',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079503/terahonelagahoon_d2fnjz.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600078103/terahonelagahoon_b8bbt1.mp3',
  ),
  new Song(
    '1',
    '1',
    'Khuda Jaane',
    'KK',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600078155/khudajaane_lndcmv.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600078117/khudajaane_phty09.mp3',
  ),
  new Song(
    '2',
    '1',
    'Tujhe Kitna Chahne Lage Hum',
    'Arijit Singh',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079505/tujhekitnachahne_jfebva.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079384/tujhekitnachahne_dc7bjl.mp3',
  ),
  new Song(
    '3',
    '1',
    'Nazm Nazm',
    'Arko Pravo Mukherjee',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079502/nazmnazm_ufymwt.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079361/nazmnazm_bajafk.mp3',
  ),
];

export const SOOTHING = [
  new Song(
    '0',
    '2',
    'Kabira',
    'Tochi Raina, Rekha Bhardwaj',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079502/kabira_oo1mis.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079348/kabira_jinll6.mp3',
  ),
  new Song(
    '1',
    '2',
    'Khaabon Ke Parindey',
    'Alyssa Mendonsa, Mohit Chauhan',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079503/khaabonkeparindey_hbqh3n.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079339/khaabonkeparindey_ywje8n.mp3',
  ),
];

export const ROCKON = [
  new Song(
    '0',
    '3',
    'Apna Time Aaega',
    'Ranveer Singh',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079501/apnatimeaaega_jenq8u.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079453/gullyboy_osvfcf.mp3',
  ),
  new Song(
    '1',
    '3',
    'Manali Trance',
    'Yo Yo Honey Singh, Neha Kakkar',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079502/manalitrance_t9rq4v.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079476/manalitrance_nrfpvt.mp3',
  ),
];

export const CLASSICS = [
  new Song(
    '0',
    '4',
    'Haal Kaisa Hai Janab Ka',
    'Kishore Kumar, Asha Bhosle',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079501/haalkaisahaijanabka_hqx7vk.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600084050/haalkaisahaijanabka_zkjiou.mp3',
  ),
];

export const WORKOUT = [
  new Song(
    '0',
    '5',
    'Soorma',
    'Shankar Mahadevan',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079503/soorma_fxyjnr.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079360/soorma_jlw3ei.mp3',
  ),
  new Song(
    '1',
    '5',
    'Zinda',
    'Siddharth Mahadevan',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079503/zinda_vd2cjg.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079377/zinda_cdx5dp.mp3',
  ),
];

export const DANCE = [
  new Song(
    '0',
    '6',
    'Bom Diggy Diggy',
    'Jasmin Walia, Zack Knight',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079501/bomdiggy_ly8gwx.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079360/bomdiggy_ckt8du.mp3',
  ),
  new Song(
    '1',
    '6',
    'The Breakup Song',
    'Pritam Chakraborty',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600079501/breakup_tq11h7.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079342/breakupsong_nr2o91.mp3',
  ),
  new Song(
    '2',
    '6',
    'Haan Main Galat',
    'Arijit Singh, Pritam Chakraborty',
    'https://res.cloudinary.com/dht1rd0lr/image/upload/v1600084536/haanmaingalat_qtiscp.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600079347/haanmaingalat_jttxst.mp3',
  ),
];

export const SONGS = [
  new Song(
    '0',
    '7',
    'Death Bed',
    'Powfu',
    'https://samplesongs.netlify.app/album-arts/death-bed.jpg',
    'https://res.cloudinary.com/dht1rd0lr/video/upload/v1600018774/song2_bxpoj6.mp3',
  ),
  new Song(
    '1',
    '7',
    'Bad Liar',
    'Imagine Dragons',
    'https://samplesongs.netlify.app/album-arts/bad-liar.jpg',
    'https://samplesongs.netlify.app/Bad%20Liar.mp3',
  ),
  new Song(
    '2',
    '7',
    'Faded',
    'Alan Walker',
    'https://samplesongs.netlify.app/album-arts/faded.jpg',
    'https://samplesongs.netlify.app/Faded.mp3',
  ),
  new Song(
    '3',
    '7',
    'Hate Me',
    'Ellie Goulding',
    'https://samplesongs.netlify.app/album-arts/hate-me.jpg',
    'https://samplesongs.netlify.app/Hate%20Me.mp3',
  ),
  new Song(
    '4',
    '7',
    'Solo',
    'Clean Bandit',
    'https://samplesongs.netlify.app/album-arts/solo.jpg',
    'https://samplesongs.netlify.app/Solo.mp3',
  ),
  new Song(
    '5',
    '7',
    'Without Me',
    'Halsey',
    'https://samplesongs.netlify.app/album-arts/without-me.jpg',
    'https://samplesongs.netlify.app/Without%20Me.mp3',
  ),
];
