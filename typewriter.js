const sentence = "Later: the Morning of 16 May.--God preserve my sanity, for to this I am reduced. Safety and the assurance of safety are things of the past. Whilst I live on here there is but one thing to hope for, that I may not go mad, if, indeed, I be not mad already. If I be sane, then surely it is maddening to think that of all the foul things that lurk in this hateful place the Count is the least dreadful to me; that to him alone I can look for safety, even though this be only whilst I can serve his purpose. Great God! merciful God! Let me be calm, for out of that way lies madness indeed. I begin to get new lights on certain things which have puzzled me. Up to now I never quite knew what Shakespeare meant when he made Hamlet say:--";

let timer = 0;
for (const char of sentence) {  
  setTimeout(() => {
    process.stdout.write(char);
  }, timer)

  timer += 50;
}

setTimeout(() => {
  process.stdout.write('\n');
}, timer);

