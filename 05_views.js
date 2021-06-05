// In this file you can instantiate your views
// We here first instantiate wrapping views, then the trial views


/** Wrapping views below

* Obligatory properties

    * trials: int - the number of trials this view will appear
    * name: string

*Optional properties
    * buttonText: string - the text on the button (default: 'next')
    * text: string - the text to be displayed in this view
    * title: string - the title of this view

    * More about the properties and functions of the wrapping views - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#wrapping-views

*/
// INTRO
const intro = magpieViews.view_generator("intro", {
  trials: 1,
  name: 'intro',
  text: `Welcome to Mental Rotation. Here, rotation is about to get absolutely mental.
            <br />
            <br />
            This is an experiment that only true mind-masters get to pass. You will get pairs of images that show representations of 3-dimensional shape from two different angles.`,
  buttonText: 'I want to prove my mastery!'
});

// INSTRUCTIONS
const general_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'general_instructions',
  title: 'General Instructions',
  text: `It is your job to rotate the left shape with your mind (that's right! With your mind, like a jedi) and then determine whether your get to arrive at the shape shown on the right.
            <br />
            <br />
            You then have to share your assessment using the force of a button press. (Which you press with your finger, not your lightsaber. We don't cover laser damage.)`,
  buttonText: 'I feel the force within me!'
});

// PRACTICE_INSTRUCTIONS
const practice_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'practice_instructions',
  title: 'Practice Instructions',
  text: `Now we train. I will float in lotus position, while you run around in the forest now.
            <br />
            <br />
            Jedi-Jokes aside: You will now be able to do 12 practice trials. After that you will be indoctrinated into the ways of the Jedi.`,
  buttonText: 'The force is strong in this one!'
});

// MAIN_INSTRUCTIONS
const main_instructions = magpieViews.view_generator("instructions", {
  trials: 1,
  name: 'main_instructions',
  title: 'Main Instructions',
  text: `Impressive, young padawan. I have nothing more to teach you.
            <br />
            <br />
            On you go, and rotate the world with your mind! Using the force! Pressing the buttons! You get it.`,
  buttonText: 'The force is with me!'
});

// POST_TEST
const post_test = magpieViews.view_generator("post_test", {
  trials: 1,
  name: 'post_test',
  title: 'Additional information',
  text: 'Answering the following questions is optional, but your answers will help us analyze our results.'

  // You can change much of what appears here, e.g., to present it in a different language, as follows:
  // buttonText: 'Weiter',
  // age_question: 'Alter',
  // gender_question: 'Geschlecht',
  // gender_male: 'männlich',
  // gender_female: 'weiblich',
  // gender_other: 'divers',
  // edu_question: 'Höchster Bildungsabschluss',
  // edu_graduated_high_school: 'Abitur',
  // edu_graduated_college: 'Hochschulabschluss',
  // edu_higher_degree: 'Universitärer Abschluss',
  // languages_question: 'Muttersprache',
  // languages_more: '(in der Regel die Sprache, die Sie als Kind zu Hause gesprochen haben)',
  // comments_question: 'Weitere Kommentare'
});

// THANKS & RESULT SUBMISSION
const thanks = magpieViews.view_generator("thanks", {
  trials: 1,
  name: 'thanks',
  title: 'Thank you for taking part in this experiment!',
  prolificConfirmText: 'Press the button'
});

/** trial (magpie's Trial Type Views) below

* Obligatory properties

    - trials: int - the number of trials this view will appear
    - name: string - the name of the view type as it shall be known to _magpie (e.g. for use with a progress bar)
            and the name of the trial as you want it to appear in the submitted data
    - data: array - an array of trial objects

* Optional properties

    - pause: number (in ms) - blank screen before the fixation point or stimulus show
    - fix_duration: number (in ms) - blank screen with fixation point in the middle
    - stim_duration: number (in ms) - for how long to have the stimulus on the screen
      More about trial life cycle - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

    - hook: object - option to hook and add custom functions to the view
      More about hooks - https://magpie-ea.github.io/magpie-docs/01_designing_experiments/04_lifecycles_hooks/

* All about the properties of trial views
* https://magpie-ea.github.io/magpie-docs/01_designing_experiments/01_template_views/#trial-views
*/

const practice = magpieViews.view_generator("key_press", {
      name: 'practice',
      trials: 12,
      data: _.shuffle(practice_trials.key_press),
      pause: 250,
});

const main = magpieViews.view_generator("key_press", {
      name: 'main',
      trials: 48,
      data: _.shuffle(practice_trials.key_press),
      pause: 250,
});

// There are many more templates available:
// forced_choice, slider_rating, dropdown_choice, testbox_input, rating_scale, image_selection, sentence_choice,
// key_press, self_paced_reading and self_paced_reading_rating_scale
