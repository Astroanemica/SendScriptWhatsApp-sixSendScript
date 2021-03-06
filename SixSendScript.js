function enviarScript(scriptText){
    const lines = scriptText.split("\n"); 

    let i = 0;       

    setInterval(() => { 
        if(i >= lines.length) return

        if(lines[i].trim() != ''){ 
            console.log(lines[i]); 
    
            window.InputEvent = window.Event || window.InputEvent;
    
            const event = new InputEvent('input', { bubbles: true });
    
            const textbox = document.querySelector('#main div._13NKt');
    
            textbox.textContent = lines[i];
    
            textbox.dispatchEvent(event);
    
            document.querySelector("#main span[data-testid=send]").click();                   

        }
        i++;
    }, 250)
}

enviarScript(`Six: The Musical Script (First UK Tour)
By Toby Marlow, Lucy Moss

Key:

Explanation of acting, sounds or other set-up that’s not dialogue.

(Explanation of the way words are spoken/sung)

Singing.

Catherine of Aragon
Anne Boleyn 
Jane Seymour
Anna of Cleves
Katherine Howard
Catherine Parr

SIX:

Divorced.

Beheaded

Died.

Divorced.

Beheaded.

Survived.

And tonight, (city name), we are…

Queens: Live!

Listen up, let me tell you a story.

A story that you think you’ve heard before.

We know you know our names and our fame and our faces.

Know all about the glories and the disgraces.

I’m done ‘cause all this time, 
I’ve been just one word in a stupid rhyme.

So I picked up a pen and a microphone.

Queens: History’s about to get overthrown.

Divorced.

Beheaded.

Died.

Divorced.

Beheaded.

Survived.

Queens: But just for you tonight,
We’re divorced, beheaded, live!
Welcome to the show, to the historemix.
Switching up the flow as we add the prefix.
Everybody knows that we used to be six wives.
Raising up the roof, till we hit the ceiling.
Get ready for the truth that we’ll be revealing.
Everybody knows that we used to be six wives…
But now we’re
Ex-wives.

(City name) make some noise!

All you ever hear and read about

Is our ex and the way it ended.

But a pair doesn’t beat a royal flush.

You’re gonna find out how he got unfriended.

Tonight, we’re gonna do ourselves justice.
‘Cause we’re taking you to court.

Every Tudor Rose has its thorns,
And you’re gonna hear ‘em live: in consort.

Divorced.

Beheaded.

Died.

Divorced.

Beheaded.

Survived.

Queens: But just for you tonight,
We’re divorced, beheaded, live!
Welcome to the show, to the historemix;
Switching up the flow as we add the prefix.
Everybody knows that we used to be six wives.
Dancing to the beat till the break of day, once
We’re done, we’ll start again
Like it’s the Renai-ssance.
Everybody knows that we used to be six wives…
But now we’re
Ex-wives.

Remember us from your GCSEs?

Queens: Divorced.

My name’s Catherine of Aragon,
Was married twenty-four years,
I’m a paragon of royalty.
My loyalty is to the Vatican,
So if you try to dump me
You won’t try that again.

Queens: Beheaded.

I’m that Boleyn girl, and I’m up next.
See, I broke England from the church.
Yeah, I’m that sexy.
Why did I lose my head?
Well, my sleeves may be green,
But my lipstick’s red.

Queens: Died.

Jane Seymour, the only one he truly loved.

Queens: Rude.

When my son was newly born, I died.
But I’m not what I seem
Or am I?
Stick around and you’ll suddenly see more.

Queens: Divorced.

Ich bin Anna of Cleves.

Queens: Ja.

When he saw my portrait, he was like—

Queens: Ja.

But I didn’t look as good as I did in my pic.
Funny how we all discuss that
But never Henry’s little...

Prick up your ears, I’m the Katherine
Who lost her head.

Queens: Beheaded.

For my promiscuity outside of wed.
Lock up your husbands, lock up your sons.
K. Howard is here and the fun’s begun.

Queens: Survived.

Five down, I’m the final wife.
I saw him to the end of his life.
I’m the survivor, Catherine Parr.
I bet you wanna know how we got this far.
I said, I bet you wanna know we 
got this far.

Queens: Do you wanna know how we got this far?
Then, welcome to the show, to the historemix;
Switching up the flow as we add the prefix.
Everybody knows that we used to be six wives.
Turn the beat up, get this party buzzing.
You want a queen bee, well, there’s half a dozen.
Everybody knows that we used to be six wives.
But now we’re 
Ex-wives.
One, two, three, four, five, six!

(City name), how are you doing tonight?

We said, how are you doing tonight?!

We are…

Queens: Six.

And welcome to our divorced, beheaded live tour!

We’ve got a whole lot in store for you tonight.

We’ve got riffs to ruffle your ruffs!

Catherine of Aragon riffs.

Shimmys to shake up your Chemise.

And a whole lot of history.

Or as we like to call it… her-story.

The queens laugh.

So obviously, you know who we are.

Please, no portraits.

But give it up for our ladies in waiting!

Catherine of Aragon motions to the ladies in waiting, also the band.

We got Maggie on the guitar!

Maggie does a solo.

Bessie on the bass.

Bessie does a solo.

And killing it on the keys, we’ve got Joan!

Joan does a solo.

And with drums so sick they’ll give you gout, It’s Maria in the drums!

Maria does a solo.

So you came here tonight to party with us old-school.

Really, really old-school… But we’re not here to have fun!

Uh-uh, we’ve got a serious score to settle.

We’ve been in the shadow of one man for too long.

And we came here tonight to step back into the spotlight!

The problem is there’s—

Queens: Six

of us, and we know you’ve all got your favourite.

Everyone always wants to know who’s the most important wife.

And they’ve been arguing about it for centuries.

We’ve heard it all…

“Who lasted the longest was the strongest.”

“The biggest sinner is obvs the winner.”

“Who had the son takes number one.”

“Who was most chased shall be first placed.”

“Most inglourious is victorious.”

“The winning contestant was the most protest-ant.”

The other Queens look at her in confusion.

...Protestant!

But we came here tonight to answer your questions once and for all!

And tell ya whatcha want, whatcha really really want—

...to know.

That’s right, we’re gonna help you figure out which one of us is—

The queen of the castle.

The rose amongst the thorns.

The Thomas Cromwell amongst the royal ministers between 1532 and 1540.

But how the purgatory are they going to choose their leading lady?

Hold up! If this is going to be a fair competition, they’re gonna have to judge us on the one thing we’ve all got in common.

The one to take the crown should be the one who had the biggest,

The firmest,

The fullest

Load of B.S. to deal with from the man who put a ring on it.

So, (city name), we’re going to hold a little contest for you.

And the rules are simple:

The queen who was dealt the worst hand,

The queen with the most hardships to withstand,

The queen who everything didn’t really go as planned,

Queens: shall be the one to lead the band!

So, what do you think (city name), are you ready to choose your leading lady?

We said, are you ready?!

Queens: Welcome to the show
To the coronation
Who will take the crown,
Be the pop sensation?
Everybody knows that we used to be six wives 
Six wives,
Six wives,
Six wives.

But there’s only one you need to hear from tonight. (City name), I’m about to win this competition. Maria, give me a beat. 

Maria gives her a beat.

So, since the day I arrived in England, let’s just say my faith had been tested on more than one occasion. First things first, I was shipped off from Spain on the night of my sweet sixteen to marry some prince called Arthur and I’m like “okay”. But then Arthur died, so naturally I’m imprisoned for seven years. Really helped with the grieving process, you know, but I’m still like, “okay.” But thank God they rescued me just in time to marry Prince Henry… my dead husband’s brother. Okay, so I’m thinking “bit weird”, but if you’d seen him back in the summer of ‘09. Let me tell you he was okay. So seven years later, we’re still trying for an heir. He’s trying really hard and I’m like “okay”, and he starts coming home late. “I was just out with my ministers!” But there’s lipstick on his ruff. And I’m like “okay”. Suddenly, he wants to annul our marriage, move some side chick into my palace and move me into a convent! Now, now, now, now, I just don’t think I’d look that good in a wimple, so I’m like “No way.”

You must agree that, baby,
In all the time I’ve been by your side,
I’ve never lost control
No matter how many times I knew you lied.
Have my golden rule,
Got to keep my cool.
Yeah, baby.

Queens: You know she’s gotta keep her cool.

And even though you’ve had your fun,
Running around with some 

Queens: Pretty, young thing.

And even though you’ve had one son
With someone who don’t own a 

Queens: Wedding ring.

No matter what I heard,
I didn’t say a word.
No, baby.

Queens: You know she never said a word.

I’ve put up with your 

Queens: Sh...

Like every single day.

Queens: Woah, woah.

But now it’s time to 

Queens: Shh,

And listen when I say...
You must think that I’m crazy,
You wanna replace me, baby there’s

Queens: N-n-n-n-n-n-no way.

If you think for a moment,
I’d grant you annulment, just hold up there’s

Queens: N-n-n-n-n-n-no way.

No way.
No way.
There’s

Queens: N-n-n-n-n-n-no way.

No way.
No way.
There’s 

Queens: N-n-n-n-n-n-no way.

There’s no way.
So you read a bible verse that I’m cursed ‘cause I was your brother’s wife,
You say it’s a pity ‘cause quoting leviticus
I’ll end up kiddy-less all my life.
Well, daddy, won’t you there
When I gave birth to Mary?

Oh, you don’t remember?

Queens: Daughters are so easy to forget.

You’re just so full of 

Queens: Sh...

Must think I’m naive.

Queens: Woah, woah.

I won’t back down,
Won’t 

Queens: Shh,

And no, I’ll never leave
You must think that I’m crazy,
You wanna replace me, baby there’s

Queens: N-n-n-n-n-n-no way.

If you thought it’d be funny
To send me to a nunnery, honey, there’s

Queens: No way.
No way.
No way.

There’s 

Queens: N-n-n-n-n-n-no way.
No way.
No way.

There’s 

Queens: N-n-n-n-n-n-no way.

There’s no way.

Let’s go, girls!

Queens: Woo!

Hey, give it up for Maria on the drums!

You’ve got me down on my knees, 
Please tell me what you think I’ve done wrong.
Been humble, been loyal,
I’ve tried to swallow my pride all along.
If you could just explain a single thing I’ve done to ‘cause you pain,
I’ll go…

No?

You’ve got nothing to say?
I’m not going away,
There’s no way.
You must think that I’m crazy,
You wanna replace me, baby there’s

Queens: N-n-n-n-n-n-no way.

You made me your wife,
So I’ll be queen till the end of my life!

Queens: N-n-n-n-n-n-no way.

N-n-n-n-n-n-n-n-no—

Queens: No way.

N-n-n-n-n-n-n-n-no—

Queens: No way.

N-n-n-n-n-no, no no no no, no, no way.

Queens: No way.
No way.

There’s 

Queens: N-n-n-n-n-n-n-n-n-n-n-n-n-no way.

There’s no way!

So clearly, I had the most to deal with from the king. And I hit that top C so you know, like dónde está my crown? Por favor.

Hang on a sec. Who was that other one?

I think you’re thinking of me!

No, there was definitely a really important one.

Yeah, still me!

Yeah. I think she, like, overlapped with you.

Yeah, the really important, controversial one that people actually care about.

Yeah. You know…

The one you’ve been waiting for.

Queens: The one you’ve been waiting for.

The mystery,

The one who changed history.

Queens: History, 

The one who changed history, mystery,

Queens: The temptress.

The one with the plan,
The plan to steal the man!

Queens: Anne!

The one who chased the king,

But paid the price with a swordsman’s swing.

Queens: Will she be the one to win?
Anne Boleyn, Anne Boleyn, Anne Boleyn, Anne Boleyn, Anne Boleyn, Anne Boleyn, Anne Boleyn!

What? Oh… sorry.

She points to Maggie and she gives her a beat.

Grew up in the French court,
Oui oui, bonjour.
Life was a chore so

Queens: She set sail.

1522,
Came straight to the UK.
All the British dudes, lame.

Queens: Epic fail.

I wanna dance and sing.

Queens: Politics?

Not my thing.
But then I met the king.
And soon my daddy said,
“You should try and get ahead.”
He wanted me,
Obviously.
Kept messaging me, like, everyday.
Couldn’t be better,
Then he sent me a letter, and
Who am I kidding?
I was prêt à manger.

Queens: Ooh.

Sent a reply,

Queens: Ooh.

Just saying ‘Hi’,

Queens: Ooh.

You’re a nice guy.
I’ll think about it, maybe,
XO, baby.

Queens: Uh oh!

Here we go.

Queens: You sent him kisses!

I didn’t know I would move in with his missus!

Queens: What?

Get a life!

Queens: You’re living with his wife.

Like, what was I meant to do?
Sorry, not sorry ‘bout what I said.
I’m just trying to have some fun.
Don’t worry, don’t worry,
Don’t lose your head.
I didn’t mean to hurt anyone.
LOL,
Say ‘oh well’,
Or go to hell.
I’m sorry, not sorry, ‘bout what I said,
Don’t lose your head.

Three in the bed,
And the little one said,
“If you wanna be wed,

Queens: Make up your mind.”

Her or me, chum.
Don’t wanna be some girl in a threesome.

Queens: Are you blind?

Don’t be bitter,

Queens: Ooh.

‘Cause I’m fitter.

Queens: Ooh.

Why hasn’t it hit her?
He doesn’t wanna bang you,
Somebody hang you.

Queens: Uh oh!

Here we go.

Queens: Your comment went viral.

I didn’t really mean it, but rumours spiral.

Queens: Wow, Anne, way to make the country hate you.

Mate, what was I meant to do?
Sorry, not sorry ‘bout what I said.
I’m just trying to have some fun.
Don’t worry, don’t worry,
Don’t lose your head.
I didn’t mean to hurt anyone.
LOL,
Say ‘oh well’,
Or go to hell.
Sorry, not sorry, ‘bout what I said,
Don’t lose your head.

Tried to elope,
But the pope said nope.
Our only hope was

Queens: Henry.

He got a promotion,
‘Caused a commotion,
Set in motion

Queens: The C of E.
The rules

Were so outdated,
Us two wanted to get x-rated.

Queens: Soon, excommunicated!

Everybody chill, it’s totes God’s will.

“Bridal Chorus” by Wagner plays in a shortened, more rock version. It is interrupted by Anne
saying:

Hold up, let me tell you how it went down.

Henry’s out every night on the town,
Just sleeping around, like,

Queens: What the hell?

If that’s how it’s gonna be,
Maybe I’ll flirt with a guy or three

Queen: Just to make him jel.

Henry finds out and he goes mental.
He screams and shouts, like, 

Queens: So judgemental.

“You damned witch,”
Mate, 

Queens: Just shut up.

I wouldn’t be such a b…

The other queens gasp to censor the word.

If you could get it up.

Queens: Uh oh!

Here we go.

Queens: Is that what you said?

And now, he’s going ‘round like, “Off with her head!”

Queens: No...

Yeah, I’m pretty sure he means it.

Queens: Seems it.

What was I meant to do?

Queens: What was she meant to do?

Like, was I meant to do?

Queens: What was she meant to do?

No, but what was I meant to do?

Queens: What was she meant to do?

No, guys, seriously, he’s actually gonna chop my head off! I mean, I guess he must’ve really liked my head… 5, 6, 7, 8!

Queens: Sorry, not sorry ‘bout what I said.

I’m just trying to have some fun.

Queens: Don’t worry, don’t worry,
Don’t lose your head!

I didn’t mean to hurt anyone.

Queens: LOL,
Say ‘oh well’,
Or go to—

—Hell!
Sorry, not sorry ‘bout what I said.

Queens: Sorry, not sorry ‘bout what she said.
Sorry, not sorry, ‘bout what I said!

Don’t lose your head!

So yeah. What a weekend.

Wait, did you actually die?

Yeah, it was so extra. Anyway, I’m obvs the winner, so I think I’ll do another solo. My next song is one I wrote about the moment I found out Catherine of Aragon had tragically died. It’s called “Wearing Yellow to a Funeral”. Please sing along if you know the words.

Catherine was a massive-

The queens give a loud uproar.

Who decided you were the winner?

She wants another turn?

Over my dead body!

Anyways, I'm pretty sure it’s my turn next.

You! Queen, please!

Are you joking?!

Yeah, weren’t you the one he truly loved?

Oh yeah, didn’t you give him the son he so desperately wanted?

Yeah, like, I had a daughter and he literally chopped my head off.

Yeah, I know. I was lucky in so many ways. Well, I had a beautiful baby boy and Henry got his heir to the throne, so of course I was going to be the one he truly loved. But you know, if Edward had turned out to be a little baby Edwina, well, I know that his love wouldn’t have lasted.

Wow, yeah, what a stressful situation. I’ve never had anything similar happen.

Yeah, babe, do you have any idea?

Okay okay, look, you’re right. You’re so right! You queens kicked some major Tudor ass! And that’s what everyone wants to hear about. You know, like, girl power, woo! What I mean to say is that, I wouldn’t do any of that. Instead, I stood by him. It didn’t matter how many stupid things he did. I was there, by his side. And that’s… not because I was weak or scared. It’s because… I loved him. So, Henry…

You’ve got a good heart,
But I know it changes.
A restless tide, untameable.
You came my way, and I knew a storm could come too.
You’d lift me high or let me fall.
But I took your hand,
Promise I’d withstand any blaze you blew my way.
‘Cause something inside, it solidified.
And I knew I’d always stay.
You can build me up,
You can tear me down,
You can try but I’m unbreakable.
You can do your best,
But I’ll stand the test,
You’ll find that I’m unshakable.
When the fire’s burnt,
When the wind has blown,
When the water’s dried,
You’ll still find stone.
My heart of stone. 
You say we’re perfect.
A perfect family.
You hold us close for the world to see.
And when I say you’re the only one I’ve ever loved,
I mean those words to you fully.
But I know, without my son your love could disappear.
And no, it isn’t fair,
But I don’t care.
‘Cause my love will still be here.
You can build me up,
You can tear me down,
You can try but I’m unbreakable.
You can do your best,
But I’ll stand the test,
You’ll find that I’m unshakable.
When the fire’s burnt,
When the wind has blown,
When the water’s dried,
You’ll still find stone.
My heart of stone. 
Soon I’ll have to go.
I’ll never see him grow.
But I hope my son will know,
He’ll never be alone.
‘Cause like a river runs dry
And leaves it’s scars behind.
I’ll be by your side,
‘Cause my love is set in stone.
...Yeah!

Queens excluding Jane: You can build me up,
You can tear me down,
You can try but I’m unbreakable.
You can do your best,
But I’ll stand the test,
You’ll find that I’m unshakable.

All Queens: The fires burnt,
The wind has blown,
The water’s dried,

You’ll still find stone, ooh yeah…
My heart of stone…
Can’t break me, can’t break me, stone…
Can’t break me, can’t break me, stone...

Queens excluding Jane: You can build me up,
You can tear me down,
You can try but I’m unbreakable.
You can do your best,
But I’ll stand the test,
You’ll find that I’m unshakable.
When the fires burnt,
When the wind has blown,
When the water’s dried,

You’ll still find stone.
My heart of stone.

Because what hurts more than a broken heart?

Anne slowly walks up to her.

A severed head.

The queens, besides Cleves, run off stage and the lights dim around Cleves.

Now, seeing as Henry was running out of women to marry in England, he had to look a little further afield. He had to adjust his location settings, if you will. To find his next queen, we’re heading to Germany. Where he enlisted the help of the legendary painter, Hans… 
(whispers) Holbein. Welcome to the house…

Queens: To the Haus of Holbein, ja!

When the lights light up, all of the queen now have two accessories, a ruff and sunglasses. They sing in a German accent while they are wearing this.

Queens: Ooh ja!
Das ist gut, ooh ja!
Ja!
The Haus of Holbein.

Hans Holbein goes around the world

Painting all of the beautiful girls.

From Spain,

To France,

And Germany.

Queens: The king chooses one,

But which one will it be?

You bring the corsets.

We’ll bring the cinches.

No one wants a waist over
Nine inches.

So what,
The makeup contains lead poison?

At least your complexion will bring all the boys in.

Queens: Ignore the fear and you’ll be fine,
We’ll turn this vier into a nine.
So just say “ja” and don’t say “nein”...
‘Cause now you’re in the house,
In the Haus of Holbein, ja!
Ooh ja!
Das ist gut, ooh ja!
Ja!
The Haus of Holbein.

We must make sure the princesses look great
When their time comes for their Holbein portrait!

We know what all the best inventions are
To hold everything out.

Ja, it’s wunderbar!

For blonder hair, then you just add a magical ingredient From your bladder.

Try these heels, so high it’s naughty.

Queens: But we cannot guarantee that you’ll still walk at forty.
Ignore the fear and you’ll be fine,
We’ll turn this vier into a nine.
So just say “ja” and don’t say “nein”...
‘Cause now you’re in the house…
In the Haus of Holbein, ja!
Ooh ja!
Das ist gut, ooh ja!
Ja!
The Haus of Holbein.

The time has come for you to select your bride, your highness! 

May we present Christina of Denmark?

Parr goes up on stage to represent Christina. She’s in front the three boxes, her standing in the middle one.

Looking for mates, dates, and a British monarch whom to secure the line of succession, winky-face.

Parr steps over to the right box, where the box lights up red and a sound effect of a thumbs down is played.

Nein? Well, never mind, she already made a match with the Duke of Milan.

Okay, next!

Parr steps down.

Your highness, may we present Amalia of Cleves?

This time, Howard steps up to represent Amalia of Cleves. It is the same setup.

Just a German girl trying to live the English dream. Hashtag no Catholics, hashtag big dowry.

Howard steps over to the right box, where the box lights up red and a sound effect of a thumbs down is played yet again.

Nein?

Okay! Who’s next?

Howard steps down.

They all chatter in a frantic matter. Then, Anna of Cleves steps up with the same setup.

Anna! Fantastic! Wunderbar!

Your highness, your highness, your highness! We are honoured to present to you Anna of Cleves!

The most beautiful woman in all of the Holy Roman Empire!

And let me assure you, Herr Holbein has certainly done her justice.

This time, the box to the left of Anna lights up green and a thumbs up sound effect is played.

Ah, the good! And may I say you will definitely not be disappointed?

Oh, no need to thank us, the pleasure has been ours—

Queens: In the Haus of Holbein!

The girls, besides Anna of Cleves begin to exist. Catherine Parr stays behind after the music is finished to say a line.

The Haus of Holbein.

Parr then exists as well. A sad piano melody plays in the background, with the only light on stage being shined down on Cleves.

Well, I guess you already know what happened next. How I came to England, hopeful, summoned after the king saw my portrait. And how I, with my meager looks the way they are, didn’t live up to his expectations. I mean, It’s the usual story, isn’t it? The savvy educated young princess deemed repulsive by the wheezing, wrinkled, ulcer-riddled man twenty-four years her senior! Rejection, rejection from a king! How can anyone overcome the fate as devastating than being forced to move into a resplendent palace in Richmond with more money that I could ever spend in a lifetime?! And not a single man around to tell me what to do with it. I mean seriously, just… tragic.

The lights light up to reveal the other queen behind her, in their normal attire and without a German accent.

Sittin’ here all alone,
On a throne
In a palace that I happen to own.
Bring me some pheasant,
Keep it on the bone!
Fill my goblet up to the brim,
Sippin’ on mead
And I spill it on my dress with a gold lace trim.
Not very prim and proper,
Can’t make me stop.
I wanna go hunting, any takers?
I’m not fake, ‘cause I’ve got acres and acres, 
Paid for with my own riches,
Where my hounds at?
Release the bitches.

Queens: Woof.

Everyday, head back for a round of croquet, yeah.
‘Cause I’m a player.
And tomorrow, I’ll hit replay.

Queens: You,

You said that I tricked ya.

Queens: ‘Cause I, 

I didn’t look like my profile picture.

Queens: Too,

Too bad I don’t agree.
So I’m gonna hang it up for everyone to see,
And you can’t stop me ‘cause
I’m the queen of the castle,
Get down, you dirty rascal.
Get down.
Get down.
Get down, you dirty rascal.
Get down.
Get down.
‘Cause I’m the queen of the castle.
When I get bored,
Pull up outside in my carriage,
Don’t got no marriage,
So I have a little flirt with the footman
As he takes my fur.

The other girls go and take Cleves’ fur jacket off, and Howard takes her microphone. There is a brief pause before Howard gives it back. Parr puts the jacket on the top step of the stage.

As you were.
Makin’ my way to the dance floor,
Some boys makin’ advances, I ignore them.
As my jam comes on the lute.
Lookin’ cute,

Queens: Das ist gut.

All eyes on me,

Queens: No criticism.

I look more rad than

Queens: Lutheranism.

Dance so hard that I’m causing a sensation.
Okay, ladies, let’s get in reformation.

Queens: You,

You said that I tricked ya.

Queens: ‘Cause I, 

I didn’t look like my profile picture.

Queens: Too,

Too bad I don’t agree.
So I’m gonna hang it up for everyone to see,
And you can’t stop me ‘cause
I’m the queen of the castle,
Get down, you dirty rascal.
Get down.
(Slow motion) Get down, you dirty rascal.
Get down.
Get down.
‘Cause I’m the queen of the castle.
Now, I ain’t sayin’ I’m a gold digger,
But check my prenup, and go figure.
I got 

Queens: Gold chains, 

Symbolic of my faith to the higher power.
In the 

Queens: Fast lane,

My horses can trot up to twelve miles an hour.
Let me explain,
I’m a Wienerschnitzel, not an English flower.
No one tells my I need a rich man,
Doin’ my thing in my palace Richmond.

Queens: You, you said that I tricked ya, tricked ya
‘Cause I, I didn’t look like my profile picture
Too, too bad I don’t agree.
So I’m gonna hang it up for everyone to see,
And you can’t stop,
You can’t stop me ‘cause—

‘Cause I’m the queen of the castle,
Get down your dirty rascal, get down!

Cleves’ calls someone from the audience to dance in their spot while the rest of the queens keep dancing in the background.

Queens excluding Cleves: Get down.
Get down.
Get down.
Get down.

G-g-g-g-g-g-g-get down.
‘Cause I’m the queen of the castle.

So yeah, it was really heartbreaking.

That doesn’t sound difficult at all.

Oh yeah… I guess you’re right. I probably won’t win then. Oh well, back to the palace!

Well, there’s one horse out of the race.

Rude.

Let’s just take a moment to commemorate Anna on the loss of the competition. And speaking of losses, also, take a moment to commemorate my son on the loss of his mother.

The “Heart of Stone” melody plays in the background.

If that doesn’t capture the audience’s hearts, then I don’t know what will.

Catherine of Aragon snaps her finger and the time changes to “No Way.”

Uh, how about the loss of the sacred bond given to you by God, the compromise—

How about the loss of my head?!

The music stops.

Okay, okay, you know what? I think it’s time for the next queen, Kate Howard.

Sorry, who?

Oh yeah, you remember, the least relevant Catherine. 

Oh yeah, haha, I still don’t care.

(Sarcastically) Oh, ha ha, funny.

Yeah, speaking of funny, good luck trying to compete with us, honey.

Yeah… yeah, you’re right. I’m gonna need all the luck I can get, your lives sounded terrible and your songs… really helped to convey that. I mean, Catherine, almost moving into a nunnery and then not? It almost could’ve been really hard for you. And Anne! Anne, getting your head chopped off? Surely, that means you’ll win the competition— oh, wait, wait, hang on a sec. Divorced, beheaded, died, divorced, beheaded… oh, wait, nevermind. And Jane, dying of natural causes? When will justice be served?! And surviving… Seriously, seriously, Anna, all jokes aside, being rejected for your looks legit sounds really rough. I wouldn’t know anything about that. I mean look at me, I’m really fit. So yeah. I can’t even begin to think of how I’m going to compete with you all. Oh wait, like this...

Queens: All you wanna do, all you wanna do, baby.

I think we can all agree that I’m the ten amongst these threes.

Queens: All you wanna do, all you wanna do, baby.

And ever since I was a child, I’d make the boys go wild.

Queens: All you wanna do, all you wanna do, baby.

Take my first music teacher, Henry Mannox. I was young, it’s true, but even then I knew...

The only thing you wanna do is...
Broad, dark, sexy Mannox
Taught me all about dynamics.
He was twenty-three,
And I was thirteen going on thirty.
We spent hours strumming the lute.
Striking the chords and blowing the flute.
He plucked my strings all the way to G,
Went from major to minor, C to D.
Tell me what you need,
What you want, you don’t need to plead.
‘Cause I feel the chemistry.
Like I get you, and you get me.
And maybe this is it,
He just cares so much, it feels legit.
We have a connection.
I think this guy is different.
‘Cause all you wanna do, all you wanna do, baby
Is touch me, love me, can’t get enoughsie.
All you wanna do, all you wanna do, baby
Is please me, squeeze me, birds and the bees me.
Run your fingers through my hair, tell me
I’m the fairest of the fair.

Queens: Playtime’s over.

The only thing you wanna do is...

So after him, there was another guy. Francis. And at the time, I was living at my step-grandma’s house; he was working for her. Working so so hard. So he asked me to be his little piece of ass...istant.

Serious, stern and slow,
Gets what he wants and he won’t take no.
Passion in all that he touches.
The sexy secretary to the dowager duchess.
Helped him in his office, had a duty to fulfill.
He even let me use his favourite quill.
Spilt ink all over the parchment,
My wrist was so tired.
Still, I came back the next day as he required.
You see, I’m all you need.
All you want, you don’t need to plead.
‘Cause I feel the chemistry.
Like I get you and you get me.
And maybe this it,
He just cares so much, this one’s legit.
We have a real connection.
I’m sure this time is different.
‘Cause all you wanna do, all you wanna do, baby
Is touch me, love me, can’t get enoughsie.
All you wanna do, all you wanna do, baby.
Is please me, squeeze me, birds and the bees me.
You can’t wait a second more 
To get my corset on the floor.

Queens: Playtime’s over.

The only thing you wanna do is mwah.

So yeah, that didn’t work out. Turns out, some guys just wanna employ girls into their private chambers. Different time back then. So I decided to have a break from boys, just focus on my career and my dad got me this amazing workplace in court, and you’ll never guess who I met!

Tall, large, Henry VIII;
Supreme head of the church of England.
Globally revered.
Although you wouldn’t know it from the look of that beard.
Made me a lady in waiting,
Hurled me and my family up in the world.
Gave me duties in court and he swears it true
That without me he doesn’t know what he’d do.
You see, I’m all you need.
All you want, we both agree
This is the place for me.
I’m finally where I’m meant to be.
Then he starts saying all this stuff.
He cares so much he calls me “love”.
He says we have a connection.
I guess it’s not so different.
‘Cause all you wanna do, all you wanna do, baby
Is touch me, love me, can’t get enoughsie.
All you wanna do, all you wanna do, baby
Is seize me, squeeze me, birds and the bees me.
There’s no time for when or how
‘Cause you just gotta have me now.

Queens: Playtime’s over.

The only thing you wanna do is mwah.
 
So then we got married... Woo.

With Henry, it isn’t easy.
His temper’s short and his mates are sleazy.
Except for this one courtier.
He’s a really nice guy, just
So sincere.
The royal life isn’t what I planned
But Thomas is there to lend a helping hand.
So sweet, makes sure that I’m okay.
And we hang out loads when the king’s away.
This guy, finally
Is what I want, the friend I need.
Just mates, no chemistry.
I get him and he gets me.
And there’s nothing more to it.
He just cares so much, he’s devoted.
He says we have a… connection.
I thought this time was different,
Why did I think he’d be different?
But it’s never, ever different.
‘Cause all you wanna do, all you wanna do, baby
Is touch me, when will enough be enoughsie?!
All you wanna do, all you wanna do, baby
Is squeeze me, don’t care if you don’t please me.
Bite my lip and pull my hair,
As you tell me I’m the fairest of the fair.

Queens: Playtime’s over.
Playtime’s over.
Playtime’s

Over!
The only thing, the only thing, 
The only thing you wanna do is…

And then I was beheaded!

Wow, that got pretty real just then.

Yeah, I guess it did. So seeing as I had the worst time, and you know by the rules of the competition, I am now the leading lady of the girl group!

The girls argue.

Yeah, you had it bad, but that was not the most heart wrenching song we’ve heard this evening.

Um, excuse me, were you not listening to my song? There were four choruses, that’s how much sh… I had to deal with.

Wow, yeah, being manipulated by men and paying the price, none of us could possibly imagine what that— oh wait, yeah, I did experience that.

Yeah, for like that last five minutes of your marriage, Anne! Men had manipulated me from day one. I was literally shipped over from a foreign country, not knowing a single word of English, to marry some random dude.

Oh my God, same!

Oh, okay. Fine, fine. But then, when Henry decided he had had enough of me, he didn’t even have the decency to say goodbye!

Same!

Oh yeah, same! Nice neck, by the way.

Ok, alright. Well now live up to this, when my one and only child had a raging fever, Henry didn’t even let me—her mother!—see her. 

Oh, boo-hoo! Baby Mary had the chickenpox and you weren’t there to hold her hand! You know, it’s funny because when I wanted to hold my newborn son, I died! 

Guys, I have the plague!

The other queens show their concerns.

Lol, just kidding, my life’s amazing. But in defence of me, I was humiliated on an international scale.

Oh yeah, I can’t imagine what that must have felt like! Who else could possibly relate?!

Oh pipe down, Anne! You wanna talk about humiliation? Well when I was queen, Henry had not one, not two, but three historically confirmed mistresses.

Oh yeah, well I had not one, not two, but three miscarriages!

Oh, well you know what, Anne Bo-loser? I had five miscarriages!

The queens all argue. Cleves gets in the middle of Boleyn’s and Aragon’s conflict while Seymour pulls Howard’s hair. Parr steps up on the stage with the band members and cuts the electricity cables to get the girls’ attention.

Stop! 

Stop.

That’s enough!

Wait, what do you mean?

I mean, I think we’ve had enough of this competition.

Yeah. You know what, queens? She’s absolutely right. 

Yeah.

Yeah yeah yeah… It’s time to decide who won!

The other queens attempt to go back to arguing. Catherine Parr runs back down the steps of the stage.

No, no, no, stop, stop! I really don’t think it’s a good idea. 

Literally, what are you on about, mate?

Like… “Let’s see what has the biggest cheer, being murdered by your husband or experiencing the trauma of losing a baby.” Are we really gonna do this?

Um, I’m pretty sure we’ve been doing that for the last hour, so.

But… miscarriages. Come on, surely, that’s one step too far.

Ooh, someone has a conscience all of a sudden.

The girls, besides Parr, laugh.

Ooh, “I’m Catherine Parr, I draw lines in arbitrary places.” Blah-blah!

She just knows she’s not gonna win.

I’m sure she doesn’t even have a story to tell.

Yeah… you know what? I will tell you a story. 

At his will be good.

Go on then, queens, take a seat. Cheers, Joan.

The other queens take a seat and Joan plays the melody of “I Don’t Need Your Love.”

So, Henry and I actually have something in common. I’ve also had my fair share of marriages. Though, unlike Henry, I managed to get through three without decapitating anyone. I know, gold star for Cathy Parr. But they had this really annoying habit of passing away and so I was dealing with, you know, incapacitating grief. I also had to keep finding new husbands to avoid being ostracised. Tudor womanhood, all I’ve ever known. And then one day, I finally meet this guy, Thomas. He seemed like he might stick around for a while. And you guessed it, he turned out to be the love of my life. We had this plan to get married, actually. But that’s when Henry turned up, single and ready to make an unsuspecting woman his wife. Just my luck. So that was that. I had to write a letter to Thomas, ending things. Dear Tom...

You know I love you, boy.
In every single way.
Though I love you, boy.
I’ll miss you everyday.
Oh I love you, boy.
I wish that I could stay with you
And keep the life I made with you.
And even though this feels so right,
I’m holding back the tears tonight.
It’s true I’ll never be over you.
‘Cause I have built a future in my mind with you.
And now the hope is gone,
There’s nothing left for me to do.
You know it isn’t true,
But I must say to you
That I don’t need your love, no, no.
I don’t need your love, no, no.
It’ll never be better than it was, no, no.
But I don’t need your love, no, no.
I’ve got no choice.
With the king, I stay alive.
Never had a choice.
Been a wife twice before, just to survive.
I don’t have a choice.
If Henry says it’s you, then it’s you.
No matter how I feel
It’s what I have to do.
But if, somehow, I had a choice.
No holding back, I’d raise my voice.
I’d say, “Henry, yeah, it’s true,
I’ll never belong to you
‘Cause I am not your toy to enjoy
‘Till there’s someone new.
As if I’d give up my boy, my work, my dreams to care for you.
Ha! Darling, get a clue.
There’s nothing you can do.
I don’t need your love, no, no.
No, I don’t need your love, no, no.
There’s nothing left to discuss, no, no.
But I don’t need your love, no, no.”

But I can’t say that. Not to the king. So this is goodbye. All my love, Catherine.

So I sent that letter to my love,
Got married to the king,
Became the one who survived.
I’ve told you about my life, the final wife.
But why should that story
Be the one I have to sing 
Just to win? I’m out
That’s not my story.
There’s so much more, remember
That I was a writer,
I wrote books and psalms and meditations.
For, for female education
So all my women could independently study scripture.
I even got a woman to paint my picture.
Why can’t I tell that story?
‘Cause in history
I’m fixed as one of six.
And without him,
I disappear.
We all disappear.

Wait, I don’t get it.

Okay, look. Why does anyone know who we are?

My sixth finger.

Put it away, babe!

No. Okay, let me put it in a different way. Who was Henry VII’s wife?

They all look around at each other for an answer.

I don’t know.

Anyone?

The queens chatter amongst themselves, but no one knows the answer.

And Henry VI’s wife?

Once again, none of them know the answer.

And Henry V’s wife?

Queens excluding Howard: We don’t know.

Catherine de Valois— I mean, I don’t know.

The point is, the only reason any of these people have come here tonight is because once upon a time—

The same guy fell in love with us.

Right.

So we can sing our hearts out.

And get down like it’s 1499.

I mean if we hadn’t married Henry VIII...

No one would want to hear our stories.

And so each of our solos end up as backing vocals on Henry’s greatest hits.

Yeah… but isn’t there a bigger problem here?

The dissolution of the monasteries?

...Nope. I’m talking about us ‘cause when we get together as a group it just—

Everyone notices Jane can’t dance!

This is what I’m talking about! We compare ourselves, and when we’re the six wives of Henry VIII, we each become just that.

One of his wives.

One of...

Queens: Six.

Oh, I get it. Since the only thing we have in common is our husband, grouping us is an inherently comparative act and as such unnecessarily elevates a historical approach ingrained in patriarchal structures… Yeah... I read.

So basically, we’re stuck.

The girls complain about it.

If only there was some way we could remove his love from our stories.

Yeah! Imagine if we had the freedom to say what we always wanted to say to him without him being there to answer back.

The rest of the girls all agree.

If only there was some way that we could, like, all be together in the same place at the same time with, like, I don’t know, four-hundred people to finally listen to us speak for ourselves or maybe even sing?

The queens all look to the audience and smile at them cheekily.

This is a—

Queens: Remix!

So we had no choice.

But now it’s us alone.

So we’ve got no choice,

No, we’ve got no choice.

We’re taking back the microphone.

I’m gonna raise my voice.

Queens: They always said we’d need your love,
But it’s time for us to rise above.
It’s not what went down in history.
But tonight, I’m singing this for me.
Henry, yeah, I’m through.
Too many times it’s been told.
And I have had enough
Love stories to get old.
And you might think it’s tough,
But I’ve got to let your love run cold.
We’re taking back control,
You need to know
That I don’t need your love, no, no.
No, I don’t need your love, no, no.
Can’t let it get the better of us, no, no.
I don’t need your love, no, no.

No, baby.
I don’t need your love.
Never need your love… yeah!

Queens excluding Parr: I don’t need your love, no, no.
No, I don’t need your love, no, no.
I don’t need your love, no, no.
I don’t need your love…!

We don’t need your love!

(City name)! And you know what? We might just be remembered for being married to the same man,

But why does anyone give a sh… who he is?

His continental campaign?

His religious reforms?

Well, actually—

It’s not the time, Catherine.

Or could it be his extraordinary, strong…

Queens: Six wives!

(Referring to the audience’s cheers) ...We thought so.

So, (city name), have you had a good time this evening?!

We said, have you had a good time?!

And (city name), are you ready for a royal happily ever after? Well, we don’t have one.

We wish we could tell you that our lives had happy endings.

But the fact is they didn’t.

And there’s nothing we can do to change that.

Ever.

They all draw a tear with their finger on their cheek.

But wait…

There’s five minutes left of the show...

And seeing as it’s our show...

We can have whatever ending we want.

(City name), seeing as you have been such a great audience, 

We’ve decided to give you our own—

Um, slightly edited version.

—Of what actually went down all those years ago.

‘Cause after all...

We’re one of a kind,

No category.

Too many years

Lost in history.

We’re free

To take our crowning glory.

Queens: For five more minutes,
We’re SiX!

He got down on one knee, but I said, “No way.”
Packed my bags and moved into a n-n-nunnery.
Joined the gospel choir,
Our riffs were on fire.
At the top of the charts is where I’m gonna stay.

Henry sent me a poem about my green sleeves.
I changed a couple words, put it on a sick beat.
The song blew their minds.
Next minute, I was signed.
And now I’m writing lyrics for Shakesy P.

Since my first son, our family’s grown.
We made a band and got quite well known.
You could perhaps call us the Tudor von Trapps.
I’m just kidding, 
We’re called the Royalling Stones.
 
Queens: We’re one of a kind,
No category.
Too many years lost in history.
We’re free to take our crowning glory
For five more minutes,
We’re SiX.

What a shame, yeah, my face, 
It cost me the crown.
So I moved to the

Queens: Haus of Holbein

In my hometown.
His mates were super arty 
But I showed them how to party.
Now on my tour of Prussia,
Everybody “Gets Down.”

Music man tried it on,
And I was like “bye.”
So I thought, who needs him?
I can give it a try.
I learned everything, now all I do is sing.
And I’ll do that until I die.

Heard all about these rocking chicks.
Loved every song and each remix.
So I went out and found them,
And we laid down an album.
No, I don’t need your love.
All I need is SiX.

Queens: We’re one of a kind,
No category.
Too many years lost in history.
We’re free to take our crowning glory
For five more minutes,
We’re SiX.
Woah, woah, we’re SiX.
Woah-oh-oh, we’re SiX.
Woah, woah, for four more minutes.
It’s the end of the show of the historemix.
We switched up the flow and we changed the prefix.
Everybody knows that we used to be six wives.
But we wanna say before we drop the curtain,
Nothing is for sure, nothing is for certain.
All that we know is that we used to be six wives.
We’re one of a kind,
No category.
Too many years lost in history.
We’re free to take our crowning glory
For three more minutes.
We’re one of a kind,
No category.
Too many years lost in history.
We’re free to take our crowning glory
For two more minutes,
We’re SiX.
Woah, woah, we’re SiX.
Woah-oh-oh, we’re SiX.
Woah, woah, for five, four, three, two, 
One more minute.
We’re SiX!

(City name), do you want one more song? Well then, stay on your feet, hit it Maria.

(City name), clap your hands!

Get your phones out, you’re gonna wanna film this!

But most importantly, get ready to dance!

Make some noise for Maggie!

Maggie does a solo.

Big up to Bessie!

Bessie does a solo.

And show some love for Joan!

Joan does a solo.

And Señorita Maria!

Maria does a solo.

Queens: Are you ready?
(City name), here we go!

You must think that I’m crazy,
You wanna replace me?
Baby, there’s—

Queens: N-n-n-n-n-no way!

If you thought you could leave me,
You must think I’m naive.
Please believe me, there’s—

Queens: N-n-n-n-n-n-n-n-n-n-n-n-not sorry!

Sorry, not sorry ‘bout what I said.
I’m just trying to have some fun.

N-n-no way!

Don’t worry, don’t worry,
Don’t lose your head!
I didn’t mean to hurt anyone!

You can...

LOL!

You can...

Say “oh well”!

You can try but I’m unbreakable.

All you wanna—

Queens: Do your best.
But I’ll stand the test.
You’ll find that I’ve…

Got a heart of—

Queens: Sto-o-o-o-o-o-o-o-o-o-one

All alone, on a throne
In a palace that I happen to own.

The only thing you wanna do...

Too bad I don’t agree
‘Cause I’m the queen of the castle.
Get down, you dirty rasca-a-al.

All you wanna do, all you wanna do, baby
Is sing along to your favourite queen’s song.
All you wanna do, all you wanna do, baby 
Is love me, love me, la, la, la, la,

La, la, la, la, love.
No, no, I don’t need your love, no, no.
It’s time to rise above.
Woah, woah.

Queens: We don’t need your love…!
‘Cause we’re so much more than—

Divorced’

Beheaded!

Died!

Divorced!

Beheaded!

Survived!

Queens: We’re…
SiX!
`);
