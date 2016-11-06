var React = require('react');
var Mission = require('./Mission.jsx');


var blocks = [[998, 338, 447, 271, 775, 624, 959, 137, 229, 245, 360, 871, 793, 552, 961, 140, 86, 53, 830, 602, 568, 33, 232, 714, 717, 877, 695, 847, 970, 580, 838, 364, 887, 943, 709, 158, 846, 402, 319, 49, 771, 667, 384, 283, 534, 38, 323, 940, 843, 320, 969, 452, 28, 982, 286, 819, 1016, 46, 571, 73, 556, 1007, 853, 460], [280, 564, 635, 81, 231, 826, 795, 183, 848, 250, 342, 776, 498, 88, 204, 550, 916, 543, 1013, 723, 778, 367, 186, 783, 923, 653, 752, 1008, 39, 672, 55, 326, 728, 467, 195, 222, 663, 74, 408, 196, 800, 812, 98, 693, 507, 99, 289, 400, 510, 841, 104, 476, 291, 909, 791, 4, 399, 205, 199, 40, 885, 211, 960, 578], [557, 836, 673, 210, 273, 963, 860, 301, 926, 642, 285, 539, 14, 689, 27, 501, 412, 265, 225, 429, 6, 218, 719, 276, 470, 680, 905, 541, 308, 649, 236, 163, 328, 770, 742, 533, 340, 515, 954, 591, 206, 166, 574, 370, 855, 401, 738, 679, 458, 395, 378, 583, 579, 895, 491, 24, 856, 299, 606, 170, 295, 750, 588, 94], [106, 908, 18, 707, 618, 410, 842, 517, 25, 527, 52, 893, 789, 263, 711, 765, 142, 992, 440, 894, 654, 502, 359, 2, 5, 246, 797, 598, 919, 226, 934, 15, 528, 613, 665, 468, 430, 845, 374, 630, 404, 292, 978, 227, 1011, 937, 967, 156, 523, 20, 874, 117, 995, 764, 907, 716, 939, 371, 244, 448, 255, 531, 676, 355], [89, 575, 237, 42, 508, 553, 586, 560, 1015, 605, 386, 511, 497, 1009, 607, 82, 489, 818, 615, 554, 834, 892, 238, 1010, 657, 917, 495, 592, 178, 610, 986, 36, 356, 80, 445, 701, 612, 87, 729, 941, 990, 151, 72, 993, 979, 317, 118, 809, 681, 870, 945, 677, 330, 974, 1023, 966, 451, 459, 160, 487, 754, 891, 361, 57], [345, 660, 469, 746, 233, 243, 438, 415, 366, 304, 733, 174, 823, 251, 896, 865, 901, 849, 133, 414, 21, 258, 559, 314, 59, 912, 857, 712, 786, 68, 762, 1017, 1006, 584, 1000, 155, 623, 333, 431, 321, 193, 798, 1018, 169, 518, 964, 44, 182, 814, 951, 41, 619, 555, 805, 535, 537, 806, 632, 457, 187, 350, 604, 397, 988], [486, 706, 121, 625, 942, 67, 788, 95, 349, 58, 976, 538, 202, 827, 760, 829, 23, 822, 526, 26, 353, 0, 772, 63, 640, 417, 804, 439, 175, 434, 792, 569, 962, 329, 420, 519, 659, 747, 903, 165, 13, 123, 35, 316, 436, 500, 352, 315, 105, 725, 441, 131, 548, 247, 991, 3, 362, 277, 194, 516, 799, 530, 595, 290], [704, 972, 262, 949, 93, 651, 691, 879, 215, 600, 396, 668, 825, 146, 66, 421, 212, 302, 958, 957, 83, 980, 239, 188, 690, 223, 336, 730, 650, 29, 96, 407, 1012, 149, 811, 920, 192, 108, 570, 683, 670, 171, 713, 268, 488, 45, 930, 126, 197, 997, 636, 235, 461, 744, 601, 674, 611, 522, 124, 944, 19, 499, 994, 37], [929, 694, 381, 696, 393, 368, 443, 12, 739, 514, 840, 220, 456, 428, 282, 831, 813, 150, 832, 213, 279, 753, 60, 915, 781, 627, 872, 78, 702, 577, 373, 442, 521, 787, 828, 880, 162, 662, 731, 437, 482, 92, 48, 256, 952, 1004, 996, 545, 427, 125, 734, 1, 928, 257, 748, 463, 902, 900, 973, 927, 173, 217, 398, 710], [341, 933, 432, 322, 433, 638, 351, 115, 682, 107, 859, 866, 876, 70, 661, 298, 8, 51, 209, 406, 228, 369, 1014, 309, 462, 620, 154, 504, 599, 200, 267, 327, 737, 453, 411, 65, 492, 1019, 906, 617, 423, 481, 899, 647, 757, 641, 622, 645, 139, 864, 111, 241, 763, 780, 337, 736, 643, 394, 628, 413, 544, 726, 129, 313], [122, 608, 354, 910, 999, 869, 77, 784, 208, 678, 947, 614, 136, 566, 278, 593, 867, 953, 913, 743, 312, 466, 130, 416, 128, 375, 490, 32, 180, 7, 890, 64, 796, 844, 984, 833, 377, 1021, 71, 483, 932, 455, 794, 882, 69, 179, 839, 766, 977, 324, 114, 284, 325, 254, 219, 911, 873, 594, 383, 824, 344, 862, 177, 270], [658, 821, 816, 989, 189, 732, 132, 91, 253, 157, 965, 503, 61, 252, 671, 637, 835, 987, 675, 581, 603, 686, 956, 756, 950, 444, 777, 801, 631, 582, 176, 685, 50, 850, 260, 113, 185, 303, 758, 700, 275, 264, 30, 790, 409, 684, 127, 372, 424, 346, 405, 722, 159, 572, 480, 573, 858, 172, 755, 119, 751, 191, 621, 147], [1001, 335, 1003, 759, 422, 525, 403, 75, 741, 512, 931, 76, 646, 718, 11, 721, 376, 985, 288, 97, 703, 936, 897, 768, 720, 305, 769, 948, 16, 697, 506, 921, 975, 230, 520, 306, 390, 889, 307, 274, 935, 249, 110, 120, 576, 141, 332, 633, 782, 310, 450, 297, 380, 62, 90, 161, 779, 22, 810, 224, 532, 807, 666, 735], [981, 116, 540, 1005, 472, 881, 181, 300, 484, 419, 563, 392, 363, 214, 454, 135, 426, 509, 248, 616, 9, 145, 542, 365, 656, 242, 54, 56, 639, 79, 207, 425, 259, 585, 198, 648, 164, 558, 561, 808, 334, 898, 84, 761, 388, 875, 914, 234, 418, 699, 886, 878, 938, 221, 168, 357, 167, 446, 785, 379, 590, 551, 85, 144], [101, 109, 318, 852, 34, 138, 358, 888, 143, 609, 946, 773, 281, 266, 465, 475, 471, 740, 664, 884, 922, 698, 474, 565, 708, 904, 567, 1002, 293, 868, 10, 629, 17, 983, 854, 485, 493, 727, 626, 820, 536, 724, 494, 473, 863, 597, 269, 184, 152, 343, 1022, 861, 311, 201, 190, 644, 112, 851, 546, 529, 505, 347, 549, 837], [31, 767, 240, 103, 496, 925, 100, 449, 634, 715, 817, 391, 134, 464, 385, 692, 287, 669, 547, 587, 435, 261, 479, 562, 705, 749, 687, 348, 955, 883, 918, 802, 968, 774, 294, 803, 153, 387, 745, 339, 148, 43, 477, 924, 216, 382, 815, 272, 1020, 655, 688, 47, 331, 652, 589, 524, 102, 389, 971, 478, 513, 296, 596, 203]];

module.exports = React.createClass({
  displayName: 'Announcment',

  PropTypes: {
    hide: React.PropTypes.boolean,
    title: React.PropTypes.string,
  },

  getInitialState: function(){
    return {
      hidden: [],
      nextBlock: 0,
    };
  },

  _delay: 50,

  componentWillReceiveProps: function(newProps){
    if(!this.props.hide && newProps.hide){
      if(this._timeout)
        window.clearTimeout(this._timeout);
      this._timeout = window.setTimeout(this._hideBlock, this._delay);
    }
    else if(this.props.hide && !newProps.hide){
      if(this._timeout)
        window.clearTimeout(this._timeout);
      this._timeout = window.setTimeout(this._showBlock, this._delay);
    }
  },

  _hideBlock: function(){
    this.setState({
      hidden: this.state.hidden.concat(blocks[this.state.nextBlock]),
      nextBlock: this.state.nextBlock + 1,
    }, function(){
      if(this.state.hidden.length < 1024)
        this._timeout = window.setTimeout(this._hideBlock, this._delay);
    }.bind(this));
  },

  _showBlock: function(){
    this.setState({
      hidden: this.state.hidden.slice(0, this.state.hidden.length-64),
      nextBlock: this.state.nextBlock - 1,
    }, function(){
      if(this.state.hidden.length > 0)
        this._timeout = window.setTimeout(this._hideBlock, this._delay);
    }.bind(this));
  },

  _renderBlocks: function(){
    var blocks = [];

    for(var i = 0 ; i < 1024 ; i++){
      var style = {
        width: '4.79vh',
        height: '4.79vh',
        marginTop: '-6px',
        padding: '0px',
        display: 'inline-block',
        backgroundColor: '#21252B',
        opacity: this.state.hidden.indexOf(i) == -1 ? '1' : '0',
        transition: 'opacity ease-in-out 250ms',
        zIndex: '99',
      };

      blocks.push(<div style={style}/>);
    }

    return blocks;
  },

  render: function(){
    var styles = {
      container: {
        position: 'fixed',
        zIndex: '99',
        display: this.state.hidden.length == 1024 ? 'none' : 'block',
      },

      blocks: {
        positon: 'fixed',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        zIndex: '99',
      },

      contents: {
        zIndex: '99',
        positon: 'fixed',
        top: '0px',
        bottom: '0px',
        left: '0px',
        right: '0px',
        transition: 'opacity ease-in-out 200ms',
        opacity: !this.props.hide && this.state.hidden.length == 0 ? '1' : '0',
        display: '-webkit-flex',
        display: 'flex',
        WebkitFlexDirection: 'row',
        flexDirection: 'row',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center',
      },

      mission: {
        marginTop: '5vh',
        height: '90vh',
        position: 'absolute',
        top: '0px',
        bottom: '0px',
        zIndex: '100',
      },

      title: {
        position: 'absolute',
        fontFamily: "'Conv_mini_pixel-7'",
        fontSize: '100px',
        top: '10vh',
        left: '37vw',
        // backgroundColor: 'rgba(255, 255, 0, .2)',
        width: '45vw',
        textAlign: 'center',
      },

      text: {
        position: 'absolute',
        fontFamily: "'Conv_ponde___'",
        fontSize: '25px',
        top: '25vh',
        left: '18vw',
        color: 'rgba(255, 255, 255, .8)',
        // backgroundColor: 'rgba(255, 255, 0, .2)',
        width: '65vw',
        height: '66vh',
        textAlign: 'center',
        display: '-webkit-flex',
        display: 'flex',
        WebkitFlexDirection: 'row',
        flexDirection: 'row',
        WebkitAlignItems: 'center',
        alignItems: 'center',
        WebkitJustifyContent: 'center',
        justifyContent: 'center',
      },
    };
    return (
      <div style={styles.container}>
        <div style={styles.blocks}>{this._renderBlocks()}</div>
        <div style={styles.contents}>
          <Mission style={styles.mission}/>
          <div style={styles.text}>{this.props.children}</div>
          <div style={styles.title}>{this.props.title}</div>
        </div>
      </div>
    );
  },
});
