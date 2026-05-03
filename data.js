// Quiz data — each response carries a `fit` field for Tulloch's profile (50yo, 182cm, 66kg, Carlson Gracie UK).
// fit values: "green" (A-game), "yellow" (situational / know-to-defend), "grey" (avoid).
// Quiz can use these to weight questions toward the user's actual training priorities.

window.QUIZ_DATA = {
  positions: [
    {
      id: "mount",
      name: "Mount",
      category: "top-dominant",
      url: "mount.html",
      reactions: [
        {
          trigger: "They bridge & roll (upa)",
          responses: [
            { name: "Step over to S-Mount", desc: "Kill the bridge by climbing high — sets up armbar.", fit: "yellow" },
            { name: "Switch to Technical Mount", desc: "As they roll to the side, follow the hip — hunt the back.", fit: "yellow" },
            { name: "Take the back", desc: "If they fully expose, slide the hooks in.", fit: "green" }
          ]
        },
        {
          trigger: "They shrimp / elbow-knee escape",
          responses: [
            { name: "Re-mount with knee shield", desc: "Drop the knee back over before they recover guard.", fit: "yellow" },
            { name: "Armbar the far arm", desc: "As they push, isolate the post arm and spin.", fit: "green" },
            { name: "Mounted triangle", desc: "If their arm slides across, trap the head + arm.", fit: "green" }
          ]
        },
        {
          trigger: "They turn belly-down",
          responses: [
            { name: "Take the back", desc: "Highest-percentage option. Hooks in, seatbelt grip.", fit: "green" },
            { name: "Bow & arrow choke setup", desc: "Once you have the back — collar grip, far leg trap.", fit: "green" }
          ]
        },
        {
          trigger: "They frame on your hips",
          responses: [
            { name: "Ezekiel choke", desc: "Their frames create the gap — feed your sleeve.", fit: "yellow" },
            { name: "Arm triangle", desc: "Pin one of their framing arms across their neck.", fit: "yellow" },
            { name: "Gift wrap their arm", desc: "Pull their wrist across their face — opens chokes + back.", fit: "yellow" }
          ]
        },
        {
          trigger: "They bench-press / push your chest",
          responses: [
            { name: "Climb to high mount + grapevines", desc: "Kills the bench press — flatten their hips.", fit: "yellow" },
            { name: "Americana on the post arm", desc: "Their own push gives you the angle to paint the floor.", fit: "yellow" }
          ]
        }
      ]
    },
    {
      id: "back-mount",
      name: "Back Mount",
      category: "top-dominant",
      url: "back-mount.html",
      reactions: [
        {
          trigger: "They hand-fight your choking arm",
          responses: [
            { name: "Bow & arrow choke", desc: "Lapel grip, far leg trap, fall away — overrides hand defence.", fit: "green" },
            { name: "Arm-trap RNC", desc: "Trap their defending arm with your leg, free your choke.", fit: "green" },
            { name: "Switch sides", desc: "Move the seatbelt to the other side — they have to defend twice.", fit: "yellow" }
          ]
        },
        {
          trigger: "They turn into you (face you)",
          responses: [
            { name: "Threaten armbar (over-arm)", desc: "As they turn, isolate the arm and spin to attack.", fit: "green" },
            { name: "Transition to Mount", desc: "If they fully face you, ride the turn into mount.", fit: "yellow" }
          ]
        },
        {
          trigger: "They escape one hook (running man / scoot down)",
          responses: [
            { name: "Re-establish hooks", desc: "Hip out, climb the leg back over before they flatten you.", fit: "yellow" },
            { name: "Take Mount", desc: "If they're escaping low, climb up to mount as they slip out.", fit: "yellow" }
          ]
        },
        {
          trigger: "They tuck their chin hard",
          responses: [
            { name: "Lapel choke (gi)", desc: "Their own collar bypasses the chin tuck.", fit: "green" },
            { name: "Mata leon (palm-to-palm)", desc: "Push the head forward — tucking helps you, not them.", fit: "green" }
          ]
        }
      ]
    },
    {
      id: "side-control",
      name: "Side Control",
      category: "top-dominant",
      url: "side-control.html",
      reactions: [
        {
          trigger: "They frame on your neck or hip",
          responses: [
            { name: "Switch to North-South", desc: "Spin to head — kills the frame, opens kimura/north-south choke.", fit: "green" },
            { name: "Knee on Belly", desc: "Step over their frame, drive knee in.", fit: "green" },
            { name: "Kimura the framing arm", desc: "Their elbow is up — perfect kimura grip target.", fit: "green" }
          ]
        },
        {
          trigger: "They turn away (toward turtle)",
          responses: [
            { name: "Take the Back", desc: "Slide hooks in as they expose. Don't let them re-flatten.", fit: "green" },
            { name: "Clock choke (gi)", desc: "Far collar grip, walk around the head.", fit: "yellow" }
          ]
        },
        {
          trigger: "They shrimp toward you",
          responses: [
            { name: "Climb to Mount", desc: "Step over their hip as they create space.", fit: "yellow" },
            { name: "Re-pin with cross-face", desc: "Drive shoulder into the jaw, kill the shrimp.", fit: "yellow" }
          ]
        },
        {
          trigger: "They get the underhook",
          responses: [
            { name: "Kimura the underhooking arm", desc: "They handed you the grip — finish or use it to switch.", fit: "green" },
            { name: "Sprawl + whizzer counter", desc: "Don't let them bridge into half guard.", fit: "yellow" }
          ]
        }
      ]
    },
    {
      id: "knee-on-belly",
      name: "Knee on Belly",
      category: "top-dominant",
      url: "knee-on-belly.html",
      reactions: [
        {
          trigger: "They push your knee with both hands",
          responses: [
            { name: "Far-side armbar", desc: "Their pushing arm is straight — spin and finish.", fit: "green" },
            { name: "Near-side armbar", desc: "Step over the head while they're committed to pushing.", fit: "yellow" }
          ]
        },
        {
          trigger: "They turn away from you",
          responses: [
            { name: "Take the Back", desc: "Free gift. Hooks in, seatbelt grip.", fit: "green" },
            { name: "Slide to Mount", desc: "If they're flat, ride the turn into mount.", fit: "yellow" }
          ]
        },
        {
          trigger: "They reach for grips on you",
          responses: [
            { name: "Baseball bat choke", desc: "Cross-grip their collars, twist down.", fit: "yellow" },
            { name: "Lapel choke (gi)", desc: "Feed your own lapel across.", fit: "yellow" }
          ]
        },
        {
          trigger: "They roll / explode out",
          responses: [
            { name: "Follow to Back", desc: "If the roll exposes the back, take it.", fit: "green" },
            { name: "Drop back to Side Control", desc: "If you're losing it, settle into side rather than guard.", fit: "yellow" }
          ]
        }
      ]
    },
    {
      id: "north-south",
      name: "North-South",
      category: "top-dominant",
      url: "north-south.html",
      reactions: [
        {
          trigger: "They turn to one side",
          responses: [
            { name: "Switch to Side Control", desc: "Follow the turn — re-pin on the open side.", fit: "yellow" },
            { name: "Kimura the up-side arm", desc: "As they turn, grab and pull through.", fit: "green" }
          ]
        },
        {
          trigger: "They frame on your hips / push you up",
          responses: [
            { name: "North-South choke", desc: "The Marcelo Garcia classic. Their frame creates the choke.", fit: "yellow" },
            { name: "Kimura", desc: "Their straight arm = grip target.", fit: "green" },
            { name: "Ezekiel choke", desc: "Sleeve choke from on top.", fit: "yellow" }
          ]
        },
        {
          trigger: "They shrimp / bridge to escape",
          responses: [
            { name: "Re-pin with chest pressure", desc: "Drive shoulders down, kill the bridge.", fit: "yellow" },
            { name: "Switch to Side Control", desc: "Use their movement to set up a stronger pin.", fit: "yellow" }
          ]
        }
      ]
    },
    {
      id: "half-guard-top",
      name: "Half Guard Top",
      category: "top-neutral",
      url: "half-guard-top.html",
      reactions: [
        {
          trigger: "They get the underhook",
          responses: [
            { name: "Whizzer + base out", desc: "Don't let them sweep — overhook their underhook arm.", fit: "yellow" },
            { name: "Kimura the underhook arm", desc: "Their elbow exposed — figure-four and pull through.", fit: "green" },
            { name: "Knee-slide pass anyway", desc: "Underhook isn't fatal if you pass fast.", fit: "green" }
          ]
        },
        {
          trigger: "They go to deep half guard",
          responses: [
            { name: "Defend deep half — base wide", desc: "Sit high, post on their head, free the leg.", fit: "yellow" },
            { name: "Kimura grip counter", desc: "Trap their far arm before they can sweep.", fit: "green" }
          ]
        },
        {
          trigger: "They hit the lockdown",
          responses: [
            { name: "Patience + walk it out", desc: "Don't fight the lockdown — angle out and free the leg.", fit: "yellow" },
            { name: "Defend the electric chair", desc: "Posture up, kill the lapel grip before they invert.", fit: "yellow" }
          ]
        },
        {
          trigger: "They get a knee shield (reverse half)",
          responses: [
            { name: "Leg drag pass", desc: "Drag the shield knee across, pin to the floor.", fit: "green" },
            { name: "Knee cut pass", desc: "Slice your knee through their hip line.", fit: "green" },
            { name: "Smash pass", desc: "Drive shoulder across, flatten their hips.", fit: "yellow" }
          ]
        }
      ]
    },
    {
      id: "closed-guard-top",
      name: "Closed Guard Top",
      category: "top-passing",
      url: "closed-guard-top.html",
      reactions: [
        {
          trigger: "They control your sleeves / collar",
          responses: [
            { name: "Strip grips + posture", desc: "Two-on-one rip down, hands to belt or hips.", fit: "green" },
            { name: "Stand to open the guard", desc: "Step up, hand on belt + hand on bicep.", fit: "green" }
          ]
        },
        {
          trigger: "They break your posture",
          responses: [
            { name: "Hide the head, return posture", desc: "Hide elbows, bury head in chest, walk feet forward, sit up.", fit: "green" },
            { name: "Double-shin pass", desc: "Crowd them on their back, walk shins up to break the guard.", fit: "yellow" }
          ]
        },
        {
          trigger: "They open guard / shift to open guard",
          responses: [
            { name: "Knee cut pass (immediately)", desc: "As they open, slice through before they grip up.", fit: "green" },
            { name: "Leg drag pass", desc: "Drag the top leg across, sit on the hip.", fit: "green" }
          ]
        },
        {
          trigger: "They pull you into high guard / triangle threat",
          responses: [
            { name: "Posture out + drive head", desc: "Stack them, drive head to mat, pull arm out.", fit: "green" },
            { name: "Stack pass", desc: "Walk feet, drive their knees over their face.", fit: "yellow" }
          ]
        }
      ]
    },
    {
      id: "open-guard-top",
      name: "Open Guard Top (Passing)",
      category: "top-passing",
      url: "open-guard-top.html",
      reactions: [
        {
          trigger: "They're playing De La Riva (DLR)",
          responses: [
            { name: "Leg drag pass", desc: "Highest % vs DLR. Strip the hook, drag across.", fit: "green" },
            { name: "Knee cut", desc: "Kill the DLR hook, cut your far knee through.", fit: "green" }
          ]
        },
        {
          trigger: "They're playing Spider Guard",
          responses: [
            { name: "Strip sleeve grips + push knees down", desc: "Two-on-one rip down, drive knees to mat.", fit: "yellow" },
            { name: "X-pass / leg-weave", desc: "Throw the leg over, walk around to side.", fit: "yellow" },
            { name: "Smash / over-under pass", desc: "Pressure pass — collapse spider guard with body weight.", fit: "yellow" }
          ]
        },
        {
          trigger: "They're playing Lasso",
          responses: [
            { name: "Pummel out / spin out", desc: "Step over the lasso leg, spin to the open side.", fit: "yellow" },
            { name: "Knee cut + smash", desc: "Crush the lasso to the floor, slice through.", fit: "green" }
          ]
        },
        {
          trigger: "They're playing Butterfly",
          responses: [
            { name: "Over-under pass", desc: "Underhook one leg, overhook the other. Walk around.", fit: "yellow" },
            { name: "Smash pass", desc: "Drive knees to mat, kill the elevation.", fit: "yellow" },
            { name: "Knee cut on the deep hook", desc: "Cross step, slice through the underhooking knee.", fit: "green" }
          ]
        },
        {
          trigger: "They've grabbed sleeves and you're standing",
          responses: [
            { name: "Torreando (bullfighter) pass", desc: "Grab pants at knees, push down + away, run around.", fit: "green" },
            { name: "Long-step pass", desc: "Step deep around their hip, pin to side.", fit: "yellow" }
          ]
        }
      ]
    },
    {
      id: "closed-guard-bottom",
      name: "Closed Guard Bottom",
      category: "bottom-active",
      url: "closed-guard-bottom.html",
      reactions: [
        {
          trigger: "They stand up to open the guard",
          responses: [
            { name: "Tripod sweep", desc: "Open guard, foot on hip + ankle grip, dump backward.", fit: "green" },
            { name: "Sit-up sweep", desc: "As they stand, sit up, underhook their leg, take top.", fit: "green" },
            { name: "Ankle pick", desc: "Same idea — sit up, grab their ankle, push knee.", fit: "green" }
          ]
        },
        {
          trigger: "They posture up on their knees",
          responses: [
            { name: "Break posture (collar + sleeve pull)", desc: "Two grips, hips up + pull down — collapse them onto you.", fit: "green" },
            { name: "Hip bump sweep", desc: "Sit up, post on far arm, bump them over.", fit: "green" },
            { name: "Kimura", desc: "If they post a hand on the mat — kimura grip + pivot.", fit: "green" },
            { name: "Guillotine", desc: "If their head is down — high-elbow guillotine.", fit: "yellow" }
          ]
        },
        {
          trigger: "They put hands on your chest",
          responses: [
            { name: "Arm drag to back", desc: "Pull wrist + tricep across, sit up to the back.", fit: "green" },
            { name: "Cross collar choke", desc: "Their straight arms = clear path to the collars.", fit: "green" },
            { name: "Armbar (straight arm)", desc: "Trap one arm, swing leg over the head.", fit: "green" }
          ]
        },
        {
          trigger: "They get an underhook on one side",
          responses: [
            { name: "Omoplata", desc: "Their underhook arm = perfect angle.", fit: "green" },
            { name: "Triangle (one arm in, one out)", desc: "Their other arm is exposed — cut the angle.", fit: "green" },
            { name: "Flower / pendulum sweep", desc: "Off the underhook side, swing legs and roll them.", fit: "green" }
          ]
        }
      ]
    },
    {
      id: "open-guard-bottom",
      name: "Open Guard Bottom",
      category: "bottom-active",
      url: "open-guard-bottom.html",
      reactions: [
        {
          trigger: "You're playing Spider Guard",
          responses: [
            { name: "Lasso sweep", desc: "Wrap one leg through the lasso, off-balance them.", fit: "green" },
            { name: "Triangle", desc: "Pull one arm across, swing leg over.", fit: "green" },
            { name: "Omoplata", desc: "Spider sets up the shoulder lock cleanly.", fit: "green" }
          ]
        },
        {
          trigger: "You're playing De La Riva",
          responses: [
            { name: "DLR sweep (back-take)", desc: "Off-balance, come up on the back.", fit: "green" },
            { name: "Switch to X-guard", desc: "If they kill DLR, transition under the far leg.", fit: "yellow" }
          ]
        },
        {
          trigger: "You're playing Butterfly",
          responses: [
            { name: "Butterfly sweep", desc: "Underhook + hook elevation, fall to the side.", fit: "yellow" },
            { name: "Arm drag to back", desc: "Pull the wrist, take the angle, climb the back.", fit: "green" }
          ]
        },
        {
          trigger: "You're playing Lasso Guard",
          responses: [
            { name: "Lasso sweep (back-take)", desc: "Pull them forward, scoot under, take the back.", fit: "green" },
            { name: "Lasso omoplata", desc: "The lasso position pre-loads the omoplata.", fit: "green" }
          ]
        },
        {
          trigger: "They lean in / break their own posture",
          responses: [
            { name: "Triangle", desc: "Head down + arm in = green light.", fit: "green" },
            { name: "Omoplata", desc: "If their arm is past your hip line.", fit: "green" }
          ]
        },
        {
          trigger: "They push your knees down",
          responses: [
            { name: "Tripod sweep", desc: "Foot on hip + ankle grip, push them backward.", fit: "green" },
            { name: "Sickle sweep", desc: "Hook one ankle, kick the other knee — they fall.", fit: "yellow" }
          ]
        },
        {
          trigger: "They drop to combat base",
          responses: [
            { name: "DLR hook in", desc: "Their up-knee = perfect DLR entry.", fit: "green" },
            { name: "X-guard entry", desc: "Underhook the up-leg, scoot under.", fit: "yellow" }
          ]
        }
      ]
    },
    {
      id: "half-guard-bottom",
      name: "Half Guard Bottom",
      category: "bottom-active",
      url: "half-guard-bottom.html",
      reactions: [
        {
          trigger: "You have the underhook",
          responses: [
            { name: "Old school sweep", desc: "Underhook + far ankle, dump them backward.", fit: "green" },
            { name: "Plan B sweep", desc: "Stand them up, sweep to top.", fit: "yellow" },
            { name: "Back take", desc: "Climb the underhook side, take the back.", fit: "green" }
          ]
        },
        {
          trigger: "They whizzer / kill the underhook",
          responses: [
            { name: "Switch to deep half", desc: "Dive under the leg, get to the waiter sweep.", fit: "grey" },
            { name: "Waiter sweep", desc: "From deep half — bench-press their leg up.", fit: "grey" },
            { name: "John Wayne sweep", desc: "Bicep grip + drive shoulder, roll them.", fit: "yellow" }
          ]
        },
        {
          trigger: "They flatten you out",
          responses: [
            { name: "Get to your side first", desc: "Frame, hip escape, restore the underhook.", fit: "green" },
            { name: "Insert knee shield", desc: "Knee across hip, frame on bicep, create distance.", fit: "green" }
          ]
        },
        {
          trigger: "They cross-face hard",
          responses: [
            { name: "Push the head, get under-hook back", desc: "Frame on jaw, swim arm under.", fit: "green" },
            { name: "Z-guard / knee shield", desc: "Insert the knee, kill the cross-face pressure.", fit: "green" }
          ]
        }
      ]
    },
    {
      id: "side-control-bottom",
      name: "Side Control Bottom",
      category: "bottom-escape",
      url: "side-control-bottom.html",
      reactions: [
        {
          trigger: "They're settled in side control (you need to escape)",
          responses: [
            { name: "Bridge → shrimp → recover guard", desc: "Frame on neck + hip, bridge into them, shrimp out.", fit: "green" },
            { name: "Insert knee shield to half guard", desc: "Faster than full guard recovery — get to half guard.", fit: "green" },
            { name: "Slide under their leg to turtle", desc: "When they're high on your shoulder — slip out the bottom.", fit: "yellow" }
          ]
        },
        {
          trigger: "They switch to north-south",
          responses: [
            { name: "Spin out ghost escape", desc: "As they switch to N-S, spin away to recover guard.", fit: "yellow" }
          ]
        },
        {
          trigger: "They go for kimura / americana",
          responses: [
            { name: "Hide your far elbow", desc: "Far hand to your near hip — kills both subs.", fit: "green" }
          ]
        },
        {
          trigger: "They climb to mount",
          responses: [
            { name: "Wedge knee in, frame on hip", desc: "Don't let their leg cross — block at the hip.", fit: "green" }
          ]
        }
      ]
    },
    {
      id: "mount-bottom",
      name: "Mount Bottom",
      category: "bottom-escape",
      url: "mount-bottom.html",
      reactions: [
        {
          trigger: "They're settled in mount (you need to escape)",
          responses: [
            { name: "Upa (bridge & roll)", desc: "Trap one arm and same-side leg, bridge sharp over the trapped shoulder.", fit: "green" },
            { name: "Elbow-knee escape (shrimp out)", desc: "Trap arm with both hands, hip out, knee in.", fit: "green" },
            { name: "Heel drag to half guard", desc: "Hook their foot with yours, drag down as you shrimp.", fit: "yellow" }
          ]
        },
        {
          trigger: "They go for cross-collar choke",
          responses: [
            { name: "Strip the first grip, hide the chin", desc: "Two-on-one rip on their first hand, chin to chest.", fit: "green" }
          ]
        },
        {
          trigger: "They go for armbar / americana",
          responses: [
            { name: "Elbows in, hands inside", desc: "Don't let your arms get isolated — keep them tight.", fit: "green" }
          ]
        },
        {
          trigger: "They threaten to take the back",
          responses: [
            { name: "Stay on your back, escape sideways", desc: "Don't turn belly-down — biggest mistake.", fit: "green" }
          ]
        }
      ]
    },
    {
      id: "back-mount-bottom",
      name: "Back Mount Bottom",
      category: "bottom-escape",
      url: "back-mount-bottom.html",
      reactions: [
        {
          trigger: "They have back control (start the escape sequence)",
          responses: [
            { name: "Pin their choking hand to your chest", desc: "Both your hands on their wrist — chin tucked. Defence first.", fit: "green" },
            { name: "Hand-fight the over-arm", desc: "Strip the high seatbelt before it locks in.", fit: "green" }
          ]
        },
        {
          trigger: "Choke is defended — now escape",
          responses: [
            { name: "Slide down past the hooks", desc: "Sit your weight on their hip, scoot toward their feet.", fit: "green" },
            { name: "Strip the second hook", desc: "First hook out, then the second — don't let them re-hook.", fit: "green" }
          ]
        },
        {
          trigger: "Hooks are out — finish the escape",
          responses: [
            { name: "Roll toward their over-arm shoulder", desc: "Strong-side roll — limits their choke leverage.", fit: "green" },
            { name: "Land in their guard or side control", desc: "Worst case is side control bottom — still better than back.", fit: "yellow" }
          ]
        },
        {
          trigger: "They lock a body triangle",
          responses: [
            { name: "Walk the lock down to your knees", desc: "Body triangle = harder to scoot. Drop the lock past hips first.", fit: "green" }
          ]
        },
        {
          trigger: "They threaten bow & arrow choke",
          responses: [
            { name: "Hand on their grip + turn into them", desc: "Their lapel grip = death. Strip + roll into the choke side.", fit: "green" }
          ]
        }
      ]
    },
    {
      id: "turtle",
      name: "Turtle",
      category: "bottom-escape",
      url: "turtle.html",
      reactions: [
        {
          trigger: "You're in turtle (don't stay here)",
          responses: [
            { name: "Sit-out (swing leg through)", desc: "Wrestling escape — kick the leg, switch hips, face them.", fit: "green" },
            { name: "Technical stand-up", desc: "Post arm, swing leg through, stand. Reset standing.", fit: "green" },
            { name: "Drop hip + recover half guard", desc: "Drop to your hip, frame, hook a leg — half guard.", fit: "green" }
          ]
        },
        {
          trigger: "They take the seatbelt",
          responses: [
            { name: "Strip the over-arm immediately", desc: "If the seatbelt locks + hooks come in — you're in back-mount-bottom.", fit: "green" }
          ]
        },
        {
          trigger: "They flatten you / drive to side",
          responses: [
            { name: "Bridge into them, recover guard", desc: "Don't stay flat — bridge, frame, recover.", fit: "green" }
          ]
        },
        {
          trigger: "They go for clock choke (gi)",
          responses: [
            { name: "Roll forward immediately", desc: "As they grip the far collar — roll forward over your shoulder before they finish.", fit: "yellow" }
          ]
        }
      ]
    }
  ]
};
