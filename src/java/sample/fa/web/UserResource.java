package sample.fa.web;

import javax.inject.Inject;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import sample.fa.domain.user.User;
import sample.fa.domain.user.UserRepository;

@Path("/user")
public class UserResource {
    @Inject
    private UserRepository repository;
    
    @POST
    public String method(UserDto dto) {
        System.out.println(dto);
        this.repository.register(new User(dto.userName, dto.age));
        return "Sample Method";
    }
}
