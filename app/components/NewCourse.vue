<template>
  
   
          <div class="col-lg-12 d-flex justify-content-center flex-column">
            <div class="card d-flex blur justify-content-center p-0 shadow-lg ">
              <div class="text-center">
                <h3 class="text-gradient text-primary">Créer un cours</h3>
              </div>
              <form  method="post" autocomplete="off">
                <div class="card-body pb-2">
                  <div class="row">
                    <div class="col-md-12">
                      <label class="form-label "> Title</label>
                      <div class="input-group mb-2">
                        <input class="form-control" placeholder="Title" aria-label="Title" type="text">
                      </div>
                    </div>
                    <div class="col-md-12">
                        <div class="form-group">
                        <label class="form-label ">Description</label>
                        <textarea name="message" class="form-control" id="message" rows="2" placeholder="Describe your course in at least 250 characters"></textarea>
                      </div>
                    </div>
                      <div class="col-md-12">
                    
                          <label class="form-label ">Classe</label>
                      <div class="input-group mb-2">
                        <select class="form-select" name="" id="">
                          <option  value="">BAC 1</option>
                          <option value="">BAC 2</option>
                        </select>
                      </div>
                    </div>
                     <div class="col-md-12">
                      <label class="form-label "> Matière / module</label>
                      <div class="input-group mb-2">
                        <select class="form-select" name="" id="">
                          <option  value="">chemie</option>
                          <option value="">math</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div class="row mb-2">
                    <div class="col-md-4 text-center">
                       <label class="form-label ">Durée</label>
                    <div class="input-group mb-3">
                    <span class="input-group-text"><i class="bi bi-calendar-range" style="font-size: 1.3rem; color: cornflowerblue;"></i></span>
                    <input min="0" type="number" class="form-control" value="">   
                     <span class="input-group-text">Semaines</span>
                    </div>    
                   </div>
                  <div class="col-md-4 text-center">
                    <label class="form-label ">Effort</label>
                       <div class="input-group mb-3">
                        
                    <span class="input-group-text"><i class="bi bi-hourglass-split" style="font-size: 1.3rem; color: cornflowerblue;"></i></span>
                    <input min="0" type="number" class="form-control" value="">   
                     <span class="input-group-text">Heures</span>
                    </div>   
                   </div>
                  <div class="col-md-4 text-center">
                    <label class="form-label ">Rythme</label>
                     <div class="input-group mb-3">
                    <span class="input-group-text"><i class="bi bi-speedometer" style="font-size: 1.3rem; color: cornflowerblue;"></i></span>
                    <input min="0" type="number" class="form-control" value="">   
                     <span class="input-group-text">~heures/semaine</span>
                    </div>
                   </div>
                  </div>
                     <div class="row mb-2">
                    <div class="col-md-5 text-center">
                      <label class="form-label " for="">Date du Début</label>
                          <input type="date" name="" class="form-control " id="">       
                    
                    </div>
                    <div class="col-md-2 text-center mt-3"><span><i class="bi bi-forward-fill " style="font-size: 1.2rem;"></i></span></div>
                      <div class="col-md-5 text-center">
                        <label class="form-label " for="">Date du fin</label>
                          <input type="date" name="" class="form-control " id="">       
                    </div>
                  </div>
                   <div class="row">
                    <div class="col-md-12 text-center">
                          <div>
                            <label class="form-label " for="">Importer la photo</label>
                            <input type="file" class="form-file" name="haha" id="">
                          </div>           
                   </div>
                  </div>
                 
                  <div class="row">
                    <div class="col-md-12 text-center">
                      <button type="submit" class="btn bg-gradient-primary mt-3 mb-0">Créer</button>
                    </div>
                  </div>

                </div>
              </form>
            </div>
          </div>
        
   
</template>