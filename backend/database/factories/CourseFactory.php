<?php

namespace Database\Factories;

use App\Models\Course;
use Illuminate\Database\Eloquent\Factories\Factory;

class CourseFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Course::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->text(50),
            'Description' => $this->faker->text(100),
            'level' => $this->faker->text(20),
            'date_debut' => $this->faker->dateTimeBetween('-7 days', '+2 months')->format('Y-m-d'),
            'date_fin' => $this->faker->dateTimeBetween('-7 days', '+2 months')->format('Y-m-d'),
            'duree' => $this->faker->randomNumber($nbDigits = 8),
            'effort' => $this->faker->randomNumber($nbDigits = 8),
            'rythme_semaine' => $this->faker->randomNumber($nbDigits = 8),
            'langue' => $this->faker->text(10),
            'image_course' => $this->faker->image('public/storage/images',400, 300, null, false),
            'module' => $this->faker->text(10),


        ];
    }
}
