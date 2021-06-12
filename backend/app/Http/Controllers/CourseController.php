<?php

namespace App\Http\Controllers;

use App\Models\Course;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Http\UploadedFile;

use App\Http\Resources\CourseCollection;
class CourseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      $courses = Course::all();

      return response()->json(['courses' => $courses]) ;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
      
        $course = new Course();
        $course->title = $request->title;
        $course->description = $request->description;
        $course->level = $request->level;
        $course->date_debut = $request->date_debut;
        $course->date_fin = $request->date_fin;
        $course->duree = $request->duree;
        $course->effort = $request->effort;
        $course->rythme_semaine = $request->rythme_semaine;
        $course->image_course = null;
        $course->langue = $request->langue;
        $course->module = $request->module;
        if($course->save()){
            return response()->json([
                'courses' => $course,
               
            ]);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $course = Course::findOrFail($id);
        return $course;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function edit(Course $course)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $course=Course::findOrFail($id);
        $input = $request->all();

        $course->fill($input)->save();
        return response([
            'message'=> 'mise à jour de article réussi',
            'données'=> $course
        ]);
    }
    
    public function search($name)
                    {
                        return Course::where('name', 'like', '%'.$name. '%')->get();
                    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Course  $course
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
         Course::destroy($id);
   return response(['message'=> 'course'.$id.'deleted']); }
}
