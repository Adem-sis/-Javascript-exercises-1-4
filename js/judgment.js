$(document).ready(function(){

  function score_indicate(){

    // By making such a description, in the variable called subject_points

    // You can create an array of [language score, English score, math score, science score, society score].

    let subject_points = [Number($('#national_language').val()),

                          Number($('#english').val()),

                          Number($('#mathematics').val()),

                          Number($('#science').val()),

                          Number($('#society').val())

                          ];



    // Furthermore, by making such a description, the total point is output to the right part: "total point:"

    let sum = 0;
    for(let i= 0; i< subject_points.length; i++){
        sum+=subject_points[i];
    }

    $("#sum_indicate").text(sum);



    // write the process to output the average point referring to the above here



    let average_point = sum/ 5

    $("#avarage_indicate").text(average_point);

    return average_point

  };



  function get_achievement(){

    // Write a process to output a string of rank values ("A" if the average score is 80 or more, "B" if it is 60 or more, "C" if it is 40 or more, "D" if it is less than 40)

    var points = score_indicate();

    return points;    

  

  }



  function get_pass_or_failure(){

    // write a process of giving a character string "pass" if all subjects have 60 or more points, and a character string of "fail" if there is at least one subject with less than 60 points.

  

    let subject_points = [Number($('#national_language').val()),

    Number($('#english').val()),

    Number($('#mathematics').val()),

    Number($('#science').val()),

    Number($('#society').val())

    ];



// Furthermore, by making such a description, the total point is output to the right part: "total point:"

  if(subject_points[0] >60 || subject_points[1] >60 || subject_points[2] >60 || subject_points[3] >60 || subject_points[3] >60 || subject_points[4] >60)

    return "pass";

  else 

    return "fail";



  }



  function judgement(){

    // write the processing to output contents such as “Your grade is A when you press the “final judge” button.

    // By writing the following, if you click the button of "final judge", "Your grade is (the value of" rank "is put here). A process is implemented in which a light blue balloon with the text “(The value of“ judgment ”) is is output.

    var judge=get_pass_or_failure();

    var points=get_achievement();

    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Your grade is`+ points+ "."+ judge+ `</label>`);

  };

  $('#national_language, #english, #mathematics, #science, #society').change(function() {

    score_indicate();

  });

  $('#btn-evaluation').click(function() {

  

    var points=get_achievement();

    

    if(points > 80)

      $('#evaluation').append(`<label id="alert-indicate" class="alert alert-info">A</label>`);

    if(60 < points )

        $('#evaluation').append(`<label id="alert-indicate" class="alert alert-info">B</label>`);

    if(40 < points )

          $('#evaluation').append(`<label id="alert-indicate" class="alert alert-info">C</label>`);

    if(points < 40)

          $('#evaluation').append(`<label id="alert-indicate" class="alert alert-info">D</label>`);


  });

  $('#btn-judge').click(function() {

    var judge=get_pass_or_failure();

    $('#judge').append(`<label id="alert-indicate" class="alert alert-info">`+judge+`</label>`);

  });

  $('#btn-declaration').click(function() {

    judgement();

  });

});