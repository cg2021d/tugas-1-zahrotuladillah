function main() {
    var canvas = document.getElementById('myCanvas');
    var gl = canvas.getContext('webgl');

    const dandang_1 = {
        color_point_1: [0.310, 0.313, 0.311], // Ini buat warna di daun 
        color_point_1_1: [0.620, 0.614, 0.618],
        color_point_1_2: [0.910, 0.901, 0.908],
        color_point_1_3:[0.780, 0.788, 0.782],
        point_e: [-0.74541,-0.39048],
        point_f: [-0.24984,-0.3984],
        point_g: [-0.74202,-0.43461],
        point_h: [-0.25663,-0.44253],
        point_i: [-0.72165,-0.47647],
        point_j: [-0.28152,-0.48552],
        point_k: [-0.68431,-0.50815],
        point_l: [-0.32112,-0.5206],
        point_m: [-0.61077,-0.5421],
        point_n: [-0.38787,-0.54662],
        point_o: [-0.48405,-0.56246],
        point_p: [-0.76465, -0.00353],
        point_q: [-0.60119, -0.16104],
        point_r: [-0.21703, -0.01145],
        point_s: [-0.33059, -0.16478],
        point_t: [-0.54593, -0.08966],
        point_u: [-0.50394, -0.03671],
        point_v: [-0.64254, -0.05109],
        point_w: [-0.38418, -0.09536],
        point_z: [-0.42484, -0.03764],
        point_a1: [-0.30496, -0.05554],
        point_b1: [-0.25474, -0.03046],
        point_c1: [-0.70815, -0.0251],
        point_d1: [-0.78093, 0.01702],
        point_e1: [-0.77567, 0.02669],
        point_f1: [-0.74204, 0.00925],
        point_g1: [-0.64547, -0.00514],
        point_h1: [-0.46719, -0.01462],
        point_i1: [-0.3384, -0.013289],
        point_j1: [-0.24512, -0.00226],
        point_k1: [-0.20777, 0.01134],
        point_l1: [-0.2, 0],
        point_m1: [-0.2, 0.02],
        point_n1: [-0.78169, 0.09013],
        point_o1: [-0.67856, 0.07582],
        point_p1: [-0.55954, 0.07199],
        point_q1: [-0.40322, 0.06884],
        point_r1: [-0.28666, 0.06837],
        point_s1: [-0.23091, 0.07271],
        point_t1: [-0.2, 0.08],
        point_u1: [-0.50119, 0.29301],
        point_v1: [-0.50908, 0.22985],
        point_w1: [-0.41805, 0.25099],
        point_z1: [-0.41148, 0.2155],
        point_a2: [-0.48345, 0.29567],
        point_b2: [-0.3779, 0.41936],
        point_c2: [-0.47156, 0.44267],
        point_d2: [-0.52473, 0.37317],
        point_e2: [-0.52949, 0.27297],
    };

    const dandang_2 = {
        point_f2 : [0.28104, -0.32543],
        point_g2 : [0.7353, -0.30365],
        point_h2 : [0.3246, -0.38299],
        point_i2 : [0.7213, -0.3581],
        point_j2 : [0.39305, -0.41877],
        point_k2 : [0.64507, -0.40944],
        point_l2 : [0.51439, -0.43744],
        point_m2 : [0.24994, 0.06176],
        point_n2 : [0.75102, 0.07723],
        point_o2 : [0.23533, 0.07293],
        point_p2 : [0.23932, 0.08397],
        point_q2 : [0.2895, 0.06287],
        point_r2 : [0.34103, 0.08567],
        point_s2 : [0.43262, 0.06742],
        point_t2 : [0.50445, 0.08778],
        point_u2 : [0.61223, 0.07179],
        point_v2 : [0.68191, 0.09471],
        point_w2 : [0.76397, 0.08956],
        point_z2 : [0.75849, 0.10094],
        point_a3 : [0.23219, 0.09425],
        point_b3 : [0.23641, 0.14433],
        point_c3 : [0.33713, 0.15053],
        point_d3 : [0.58576, 0.15744],
        point_e3 : [0.71323, 0.15936],
        point_f3 : [0.23865, 0.10267],
        point_g3 : [0.75838, 0.15556],
        point_h3 : [0.76329, 0.1088],
        point_i3 :[ 0.7583, 0.11225],
        point_j3 : [0.48768, 0.34419],
        point_k3 :[ 0.4049, 0.28266],
        point_l3 : [0.37176, 0.34988],
        point_m3 : [0.3702, 0.328],
        point_n3 : [0.39302, 0.28079],
        point_o3 :[ 0.38455, 0.26227],
        point_p3 : [0.43222, 0.30018],
        point_q3 :[ 0.38665, 0.43764],
        point_r3 : [0.37941, 0.38277],
        point_s3 : [0.38418, 0.37069],
        point_t3 : [0.40807, 0.37445],
        point_u3 : [0.3899, 0.35765],
        point_v3 : [0.41629, 0.3001],
        point_w3 : [0.40835, 0.28114],
        point_z3 : [0.37364, 0.33999],
        point_a4 : [0.60528, 0.26235],
        point_b4 : [0.58888, 0.28266],
        point_c4 :[ 0.57718, 0.28177],
        point_d4 : [0.60523, 0.34548],
        point_e4 :[ 0.58669, 0.37316],
        point_f4 : [0.57769, 0.35154],
        point_g4 : [0.58703, 0.33649],
        point_h4 : [0.59036, 0.31277],
        point_i4 :[ 0.59582, 0.41867],
        point_j4 : [0.56927, 0.38935],
        point_k4 : [0.55857, 0.30494],
        point_l4 : [0.56, 0.34],
        point_m4 : [0.57159, 0.37895],
        point_n4 : [0.54705, 0.30291],
        point_o4 : [0.57062, 0.28639],
        point_p4 : [0.56268, 0.44399],
        point_q4 : [0.4962, 0.41091],
        point_r4 : [0.51065, 0.45884],
        point_s4 : [0.44331, 0.4156],
        point_t4 : [0.45485, 0.46341],
        point_u4 : [0.39804, 0.40362],
        point_v4 : [0.41979, 0.45708],
        point_w4 : [0.25799, -0.04074],
        point_z4 : [0.21014, -0.01129],
        point_a5 : [0.2238, 0.07616],
        point_b5 : [0.74688, -0.02179],
        point_c5 : [0.79246, 0.00335],
        point_d5 : [0.7791, 0.09215]
    };

    const vertices = [
        //Left Object
        ...dandang_1.point_e, ...dandang_1.color_point_1_3,
        ...dandang_1.point_f, ...dandang_1.color_point_1_3,
        ...dandang_1.point_g, ...dandang_1.color_point_1_3, //1

        ...dandang_1.point_f, ...dandang_1.color_point_1_3,
        ...dandang_1.point_g, ...dandang_1.color_point_1_3,
        ...dandang_1.point_h, ...dandang_1.color_point_1_3, //2

        ...dandang_1.point_g, ...dandang_1.color_point_1_3,
        ...dandang_1.point_h, ...dandang_1.color_point_1_3,
        ...dandang_1.point_i, ...dandang_1.color_point_1_3, //3

        ...dandang_1.point_h, ...dandang_1.color_point_1_3,
        ...dandang_1.point_i, ...dandang_1.color_point_1_3,
        ...dandang_1.point_j, ...dandang_1.color_point_1_3, //4

        ...dandang_1.point_i, ...dandang_1.color_point_1_3,
        ...dandang_1.point_j, ...dandang_1.color_point_1_3,
        ...dandang_1.point_k, ...dandang_1.color_point_1_3, //5

        ...dandang_1.point_j, ...dandang_1.color_point_1_3,
        ...dandang_1.point_k, ...dandang_1.color_point_1_3,
        ...dandang_1.point_l, ...dandang_1.color_point_1_3, //6

        ...dandang_1.point_k, ...dandang_1.color_point_1_3,
        ...dandang_1.point_l, ...dandang_1.color_point_1_3,
        ...dandang_1.point_m, ...dandang_1.color_point_1_3, //7

        ...dandang_1.point_l, ...dandang_1.color_point_1_3,
        ...dandang_1.point_m, ...dandang_1.color_point_1_3,
        ...dandang_1.point_n, ...dandang_1.color_point_1_3, //8

        ...dandang_1.point_m, ...dandang_1.color_point_1_3,
        ...dandang_1.point_n, ...dandang_1.color_point_1_3,
        ...dandang_1.point_o, ...dandang_1.color_point_1_3, //9

        ...dandang_1.point_e, ...dandang_1.color_point_1_3,
        ...dandang_1.point_f, ...dandang_1.color_point_1_3,
        ...dandang_1.point_q, ...dandang_1.color_point_1_3, //10

        ...dandang_1.point_e, ...dandang_1.color_point_1_3,
        ...dandang_1.point_p, ...dandang_1.color_point_1_3,
        ...dandang_1.point_q, ...dandang_1.color_point_1_3, //11

        ...dandang_1.point_p, ...dandang_1.color_point_1_3,
        ...dandang_1.point_q, ...dandang_1.color_point_1_3,
        ...dandang_1.point_t, ...dandang_1.color_point_1_3, //12

        ...dandang_1.point_t, ...dandang_1.color_point_1_3,
        ...dandang_1.point_u, ...dandang_1.color_point_1_3,
        ...dandang_1.point_v, ...dandang_1.color_point_1_3, //13

        ...dandang_1.point_u, ...dandang_1.color_point_1_3,
        ...dandang_1.point_v, ...dandang_1.color_point_1_3,
        ...dandang_1.point_c1, ...dandang_1.color_point_1_3, //14

        ...dandang_1.point_f, ...dandang_1.color_point_1_3,
        ...dandang_1.point_q, ...dandang_1.color_point_1_3,
        ...dandang_1.point_s, ...dandang_1.color_point_1_3, //15

        ...dandang_1.point_f, ...dandang_1.color_point_1_3,
        ...dandang_1.point_s, ...dandang_1.color_point_1_3,
        ...dandang_1.point_r, ...dandang_1.color_point_1_3, //16

        ...dandang_1.point_w, ...dandang_1.color_point_1_3,
        ...dandang_1.point_s, ...dandang_1.color_point_1_3,
        ...dandang_1.point_r, ...dandang_1.color_point_1_3, //17

        ...dandang_1.point_w, ...dandang_1.color_point_1_3,
        ...dandang_1.point_z, ...dandang_1.color_point_1_3,
        ...dandang_1.point_a1, ...dandang_1.color_point_1_3, //18

        ...dandang_1.point_z, ...dandang_1.color_point_1_3,
        ...dandang_1.point_a1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_b1, ...dandang_1.color_point_1_3, //19

        //pegangansamping
        ...dandang_1.point_q, ...dandang_1.color_point_1_1,
        ...dandang_1.point_s, ...dandang_1.color_point_1_1,
        ...dandang_1.point_w, ...dandang_1.color_point_1_1, //20

        ...dandang_1.point_q, ...dandang_1.color_point_1_1,
        ...dandang_1.point_t, ...dandang_1.color_point_1_1,
        ...dandang_1.point_w, ...dandang_1.color_point_1_1,

        ...dandang_1.point_t, ...dandang_1.color_point_1_1,
        ...dandang_1.point_w, ...dandang_1.color_point_1_1,
        ...dandang_1.point_z, ...dandang_1.color_point_1_1,

        ...dandang_1.point_t, ...dandang_1.color_point_1_1,
        ...dandang_1.point_u, ...dandang_1.color_point_1_1,
        ...dandang_1.point_z, ...dandang_1.color_point_1_1,

        //bodyatas
        ...dandang_1.point_p, ...dandang_1.color_point_1_2,
        ...dandang_1.point_d1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_e1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_p, ...dandang_1.color_point_1_2,
        ...dandang_1.point_e1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_f1, ...dandang_1.color_point_1_2, //25

        ...dandang_1.point_p, ...dandang_1.color_point_1_2,
        ...dandang_1.point_c1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_f1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_c1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_f1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_g1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_u, ...dandang_1.color_point_1_2,
        ...dandang_1.point_c1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_g1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_u, ...dandang_1.color_point_1_2,
        ...dandang_1.point_g1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_h1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_u, ...dandang_1.color_point_1_2,
        ...dandang_1.point_z, ...dandang_1.color_point_1_2,
        ...dandang_1.point_h1, ...dandang_1.color_point_1_2, //30

        ...dandang_1.point_z, ...dandang_1.color_point_1_2,
        ...dandang_1.point_h1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_i1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_z, ...dandang_1.color_point_1_2,
        ...dandang_1.point_b1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_i1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_b1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_i1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_j1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_r, ...dandang_1.color_point_1_2,
        ...dandang_1.point_b1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_j1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_r, ...dandang_1.color_point_1_2,
        ...dandang_1.point_j1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_k1, ...dandang_1.color_point_1_2, //35

        ...dandang_1.point_r, ...dandang_1.color_point_1_2,
        ...dandang_1.point_k1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_l1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_k1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_l1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_m1, ...dandang_1.color_point_1_2,

        //tutupbawah
        ...dandang_1.point_e1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_f1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_n1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_f1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_n1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_o1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_f1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_g1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_o1, ...dandang_1.color_point_1_3, //40

        ...dandang_1.point_g1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_o1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_p1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_g1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_h1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_p1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_h1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_p1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_q1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_h1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_i1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_q1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_i1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_r1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_q1, ...dandang_1.color_point_1_3, //45

        ...dandang_1.point_i1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_j1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_r1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_j1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_r1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_s1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_j1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_k1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_s1, ...dandang_1.color_point_1_3,

        ...dandang_1.point_k1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_s1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_t1, ...dandang_1.color_point_1_3,

        //tutupatas
        ...dandang_1.point_n1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_v1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_e2, ...dandang_1.color_point_1_2, //50

        ...dandang_1.point_u1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_v1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_e2, ...dandang_1.color_point_1_2,

        ...dandang_1.point_n1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_o1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_v1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_o1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_p1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_v1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_p1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_q1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_v1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_q1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_v1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_z1, ...dandang_1.color_point_1_2, //55

        ...dandang_1.point_r1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_q1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_z1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_r1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_s1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_z1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_s1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_t1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_z1, ...dandang_1.color_point_1_2,

        ...dandang_1.point_t1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_w1, ...dandang_1.color_point_1_2,
        ...dandang_1.point_z1, ...dandang_1.color_point_1_2,

        //peganganatas
        ////depan
        ...dandang_1.point_v1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_w1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_z1, ...dandang_1.color_point_1_3, //60

        ...dandang_1.point_v1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_w1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_a2, ...dandang_1.color_point_1_3,

        ...dandang_1.point_w1, ...dandang_1.color_point_1_3,
        ...dandang_1.point_a2, ...dandang_1.color_point_1_3,
        ...dandang_1.point_b2, ...dandang_1.color_point_1_3,

        ...dandang_1.point_a2, ...dandang_1.color_point_1_3,
        ...dandang_1.point_b2, ...dandang_1.color_point_1_3,
        ...dandang_1.point_c2, ...dandang_1.color_point_1_3,
        ////belakang
        ...dandang_1.point_u1, ...dandang_1.color_point_1,
        ...dandang_1.point_v1, ...dandang_1.color_point_1,
        ...dandang_1.point_a2, ...dandang_1.color_point_1,

        ...dandang_1.point_u1, ...dandang_1.color_point_1,
        ...dandang_1.point_d2, ...dandang_1.color_point_1,
        ...dandang_1.point_e2, ...dandang_1.color_point_1, //65

        ...dandang_1.point_u1, ...dandang_1.color_point_1,
        ...dandang_1.point_a2, ...dandang_1.color_point_1,
        ...dandang_1.point_d2, ...dandang_1.color_point_1, //66

        ...dandang_1.point_a2, ...dandang_1.color_point_1,
        ...dandang_1.point_c2, ...dandang_1.color_point_1,
        ...dandang_1.point_d2, ...dandang_1.color_point_1, //67


        //right object
        //1006
        ...dandang_2.point_f2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_g2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_h2, ...dandang_1.color_point_1_3,

        ...dandang_2.point_g2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_h2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_i2, ...dandang_1.color_point_1_3,

        ...dandang_2.point_h2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_i2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_j2, ...dandang_1.color_point_1_3, //70

        ...dandang_2.point_i2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_j2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_k2, ...dandang_1.color_point_1_3,

        ...dandang_2.point_j2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_k2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_l2, ...dandang_1.color_point_1_3,

        //body
        ...dandang_2.point_f2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_g2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_m2, ...dandang_1.color_point_1_3,

        ...dandang_2.point_g2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_m2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_n2, ...dandang_1.color_point_1_3,

        //bodyatas
        ...dandang_2.point_m2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_o2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_p2, ...dandang_1.color_point_1_2, //75

        ...dandang_2.point_m2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_p2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_q2, ...dandang_1.color_point_1_2,

        ...dandang_2.point_p2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_q2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_r2, ...dandang_1.color_point_1_2,

        ...dandang_2.point_q2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_r2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_s2, ...dandang_1.color_point_1_2,

        ...dandang_2.point_r2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_s2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_t2, ...dandang_1.color_point_1_2,

        ...dandang_2.point_s2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_t2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_u2, ...dandang_1.color_point_1_2, //80

        ...dandang_2.point_t2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_u2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_v2, ...dandang_1.color_point_1_2,

        ...dandang_2.point_u2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_v2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_n2, ...dandang_1.color_point_1_2,

        ...dandang_2.point_n2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_v2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_z2, ...dandang_1.color_point_1_2,

        ...dandang_2.point_n2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_w2, ...dandang_1.color_point_1_2,
        ...dandang_2.point_z2, ...dandang_1.color_point_1_2,

        //tutupbawah
        ...dandang_2.point_p2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_a3, ...dandang_1.color_point_1_3,
        ...dandang_2.point_f3, ...dandang_1.color_point_1_3, //85

        ...dandang_2.point_p2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_r2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_b3, ...dandang_1.color_point_1_3,

        ...dandang_2.point_r2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_b3, ...dandang_1.color_point_1_3,
        ...dandang_2.point_c3, ...dandang_1.color_point_1_3,

        ...dandang_2.point_r2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_t2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_c3, ...dandang_1.color_point_1_3,

        ...dandang_2.point_t2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_c3, ...dandang_1.color_point_1_3,
        ...dandang_2.point_d3, ...dandang_1.color_point_1_3,

        ...dandang_2.point_t2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_v2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_d3, ...dandang_1.color_point_1_3, //90

        ...dandang_2.point_v2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_d3, ...dandang_1.color_point_1_3,
        ...dandang_2.point_e3, ...dandang_1.color_point_1_3,

        ...dandang_2.point_v2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_z2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_e3, ...dandang_1.color_point_1_3,

        ...dandang_2.point_z2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_e3, ...dandang_1.color_point_1_3,
        ...dandang_2.point_g3, ...dandang_1.color_point_1_3,

        ...dandang_2.point_z2, ...dandang_1.color_point_1_3,
        ...dandang_2.point_i3, ...dandang_1.color_point_1_3,
        ...dandang_2.point_h3, ...dandang_1.color_point_1_3,

        //tutupatas
        ...dandang_2.point_b3, ...dandang_1.color_point_1_2,
        ...dandang_2.point_c3, ...dandang_1.color_point_1_2,
        ...dandang_2.point_j3, ...dandang_1.color_point_1_2, //95

        ...dandang_2.point_c3, ...dandang_1.color_point_1_2,
        ...dandang_2.point_d3, ...dandang_1.color_point_1_2,
        ...dandang_2.point_j3, ...dandang_1.color_point_1_2,

        ...dandang_2.point_d3, ...dandang_1.color_point_1_2,
        ...dandang_2.point_e3, ...dandang_1.color_point_1_2,
        ...dandang_2.point_j3, ...dandang_1.color_point_1_2,

        ...dandang_2.point_e3, ...dandang_1.color_point_1_2,
        ...dandang_2.point_g3, ...dandang_1.color_point_1_2,
        ...dandang_2.point_j3, ...dandang_1.color_point_1_2,

        //peganganatas
        ...dandang_2.point_k3, ...dandang_1.color_point_1,
        ...dandang_2.point_n3, ...dandang_1.color_point_1,
        ...dandang_2.point_o3, ...dandang_1.color_point_1,

        ...dandang_2.point_k3, ...dandang_1.color_point_1,
        ...dandang_2.point_m3, ...dandang_1.color_point_1,
        ...dandang_2.point_n3, ...dandang_1.color_point_1, //100

        ...dandang_2.point_k3, ...dandang_1.color_point_1,
        ...dandang_2.point_m3, ...dandang_1.color_point_1,
        ...dandang_2.point_l3, ...dandang_1.color_point_1,

        ...dandang_2.point_p3, ...dandang_1.color_point_1,
        ...dandang_2.point_w3, ...dandang_1.color_point_1,
        ...dandang_2.point_v3, ...dandang_1.color_point_1,

        ...dandang_2.point_p3, ...dandang_1.color_point_1,
        ...dandang_2.point_u3, ...dandang_1.color_point_1,
        ...dandang_2.point_v3, ...dandang_1.color_point_1,

        ...dandang_2.point_p3, ...dandang_1.color_point_1,
        ...dandang_2.point_t3, ...dandang_1.color_point_1,
        ...dandang_2.point_u3, ...dandang_1.color_point_1,

        ...dandang_2.point_s3, ...dandang_1.color_point_1,
        ...dandang_2.point_t3, ...dandang_1.color_point_1,
        ...dandang_2.point_u3, ...dandang_1.color_point_1, //105

        ...dandang_2.point_q3, ...dandang_1.color_point_1,
        ...dandang_2.point_s3, ...dandang_1.color_point_1,
        ...dandang_2.point_t3, ...dandang_1.color_point_1,

        ...dandang_2.point_q3, ...dandang_1.color_point_1,
        ...dandang_2.point_r3, ...dandang_1.color_point_1,
        ...dandang_2.point_s3, ...dandang_1.color_point_1,

        //peganganatasgelap
        ...dandang_2.point_l3, ...dandang_1.color_point_1,
        ...dandang_2.point_u3, ...dandang_1.color_point_1,
        ...dandang_2.point_z3, ...dandang_1.color_point_1,

        ...dandang_2.point_l3, ...dandang_1.color_point_1,
        ...dandang_2.point_s3, ...dandang_1.color_point_1,
        ...dandang_2.point_u3, ...dandang_1.color_point_1,

        ...dandang_2.point_a4, ...dandang_1.color_point_1,
        ...dandang_2.point_b4, ...dandang_1.color_point_1,
        ...dandang_2.point_c4, ...dandang_1.color_point_1, //110

        ...dandang_2.point_b4, ...dandang_1.color_point_1,
        ...dandang_2.point_c4, ...dandang_1.color_point_1,
        ...dandang_2.point_d4, ...dandang_1.color_point_1,

        ...dandang_2.point_d4, ...dandang_1.color_point_1,
        ...dandang_2.point_g4, ...dandang_1.color_point_1,
        ...dandang_2.point_h4, ...dandang_1.color_point_1,

        ...dandang_2.point_d4, ...dandang_1.color_point_1,
        ...dandang_2.point_f4, ...dandang_1.color_point_1,
        ...dandang_2.point_g4, ...dandang_1.color_point_1,

        ...dandang_2.point_d4, ...dandang_1.color_point_1,
        ...dandang_2.point_e4, ...dandang_1.color_point_1,
        ...dandang_2.point_f4, ...dandang_1.color_point_1,

        //peganganatasagakgelap
        ...dandang_2.point_k4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_n4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_o4, ...dandang_1.color_point_1_1, //115

        ...dandang_2.point_k4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_l4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_n4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_f4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_k4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_l4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_f4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_l4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_m4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_e4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_f4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_j4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_e4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_i4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_j4, ...dandang_1.color_point_1_1, //120

        ...dandang_2.point_i4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_j4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_p4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_j4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_p4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_q4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_p4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_q4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_r4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_q4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_r4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_s4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_r4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_s4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_t4, ...dandang_1.color_point_1_1, //125

        ...dandang_2.point_s4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_t4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_v4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_q3, ...dandang_1.color_point_1_1,
        ...dandang_2.point_s4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_v4, ...dandang_1.color_point_1_1,

        ...dandang_2.point_q3, ...dandang_1.color_point_1_1,
        ...dandang_2.point_s4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_u4, ...dandang_1.color_point_1_1,

        //pegangankanan
        ...dandang_2.point_n2, ...dandang_1.color_point_1_1,
        ...dandang_2.point_b5, ...dandang_1.color_point_1_1,
        ...dandang_2.point_c5, ...dandang_1.color_point_1_1,

        ...dandang_2.point_n2, ...dandang_1.color_point_1_1,
        ...dandang_2.point_c5, ...dandang_1.color_point_1_1,
        ...dandang_2.point_d5, ...dandang_1.color_point_1_1, //130

        //pegangankiri
        ...dandang_2.point_m2, ...dandang_1.color_point_1_1,
        ...dandang_2.point_w4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_a5, ...dandang_1.color_point_1_1, //131

        ...dandang_2.point_w4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_z4, ...dandang_1.color_point_1_1,
        ...dandang_2.point_a5, ...dandang_1.color_point_1_1  //132
   ];

    var vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
    gl.bindBuffer(gl.ARRAY_BUFFER, null);

    var vertexShaderCode = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);


    var vertexShaderSource = `
        attribute vec2 aPosition;
        attribute vec3 aColor;
        varying vec3 vColor;
        uniform float uChange;
        void main() {
            gl_Position = vec4(aPosition.x, aPosition.y, 1.0, 1.0);
            vColor = aColor;
        }
    `;

    var fragmentShaderSource = `
        precision mediump float;
        varying vec3 vColor;
        void main() {
            gl_FragColor = vec4(vColor, 1.0);
        }
    `;

    var vertexShader = gl.createShader(gl.VERTEX_SHADER);
    gl.shaderSource(vertexShader, vertexShaderSource);
    var fragmentShader = gl.createShader(gl.FRAGMENT_SHADER);
    gl.shaderSource(fragmentShader, fragmentShaderSource);


    gl.compileShader(vertexShader);
    gl.compileShader(fragmentShader);


    var shaderProgram = gl.createProgram();


    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);


    gl.linkProgram(shaderProgram);


    gl.useProgram(shaderProgram);


    var aPosition = gl.getAttribLocation(shaderProgram, "aPosition");
    gl.vertexAttribPointer(
        aPosition,
        2,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        0
    );
    gl.enableVertexAttribArray(aPosition);
    var aColor = gl.getAttribLocation(shaderProgram, "aColor");
    gl.vertexAttribPointer(
        aColor,
        3,
        gl.FLOAT,
        false,
        5 * Float32Array.BYTES_PER_ELEMENT,
        2 * Float32Array.BYTES_PER_ELEMENT
    );
    gl.enableVertexAttribArray(aColor);

    var freeze = false;
    
    // Interactive graphics with mouse
    function onMouseClick(event) {
        freeze = !freeze;
    }
    document.addEventListener("click", onMouseClick);
    // Interactive graphics with keyboard

    function onKeydown(event) {
        if (event.keyCode == 32) freeze = true;
    }

    function onKeyup(event) {
        if (event.keyCode == 32) freeze = false;
    }
    document.addEventListener("keydown", onKeydown);
    document.addEventListener("keyup", onKeyup);

    // Speed set to my NRP
    var speed = 0.0139;
    var change = 0;
    var uChange = gl.getUniformLocation(shaderProgram, "uChange");

    function moveVertices() {
        if (change < -0.6 || change > 0.6) {
            speed = speed * -1;
        }

        for (let i = 1006; i < vertices.length; i += 5) {
            vertices[i] = vertices[i] + speed;
        }
    }

    function render() {
        moveVertices();
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(vertices), gl.STATIC_DRAW);
        change = change + speed;
        gl.uniform1f(uChange, change);

        gl.clearColor(0, 0, 0, 1.0);
        gl.clear(gl.COLOR_BUFFER_BIT);
        var primitive = gl.TRIANGLES;
        var offset = 0;
        var nVertex = 396;
        gl.drawArrays(primitive, offset, nVertex);
        requestAnimationFrame(render);
    }
    requestAnimationFrame(render)
}
